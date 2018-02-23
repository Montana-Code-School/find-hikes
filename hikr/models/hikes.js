const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const hikesSchema = new Schema({
  name: String,
  length: String,
  location: String,
  difficulty: String,
  description: String,
  lengthKey: String,
});

module.exports = mongoose.model('hikes', hikesSchema);
