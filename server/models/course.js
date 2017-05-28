var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var CourseSchema = new Schema({
  name: String,
  summary: String,
  price: Number,
  poster: String,
  cat: {
    type: ObjectId,
    ref: 'Cat'
  },
})
module.exports = mongoose.model('Course',CourseSchema);
