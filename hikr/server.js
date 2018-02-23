import mongoose from 'mongoose';
import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import hikes from './models/hikes.js';
import cors from 'cors';
mongoose.connect('mongodb://localhost/hikes');
mongoose.Promise = require('bluebird');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors());


const port = process.env.PORT || 8080;
const router = express.Router();

router.use((req, res, next) => {
  console.log("something is happening!!");
  next();
});

router.get('/', (req, res)=>{
  res.json({
    message:'yay hikes!'
  });
});

router.route('/hikes')
  .post((req, res) => {
    const hike = new hikes();
    hike.name = req.body.name;
    hike.length = req.body.length;
    hike.location = req.body.location;
    hike.difficulty = req.body.difficulty;
    hike.description = req.body.description;
    hike.lengthKey = req.body.lengthKey;
    hike.save(err => {
      console.log("saved");
      if(err) {
        res.send(err);

      }
      res.json({message: 'hike created! nice work!'});
    });
  })
  .get((req, res)=>{
    hikes.find((err, hikes)=>{
      if(err)
        res.send(err);

      res.json(hikes);
    });
  });

router.route('/hikes/:hike_id')
  .get((req, res) => {
    hikes.findById(req.params.hike_id, (err, hike) => {
      if (err)
        res.send(err);
      res.json(hike);
    });
  })
  .put((req, res) => {
    hikes.findById(req.params.hike_id, (err, hike) => {
      if (err)
        res.send(err);
      hike.name = req.body.name;
      hike.length = req.body.length;
      hike.location = req.body.location;
      hike.difficulty = req.body.difficulty;
      hike.description = req.body.description;
      hike.lengthKey = req.body.lengthKey;
      hike.save(err =>{
        if(err)
          res.send(err);
        res.json({
          message: "hike updated!"
        });
      });
    });
  })
  .delete(({params}, res) => {
    hikes.remove({
      _id: params.hike_id
    }, (err, hike) => {
      if(err)
        res.send(err);
      res.json({
        message: "hike be gone!"
      });
    });
  });



app.use("/api", router);
app.listen(port);
console.log("hiking happens on " + port);
