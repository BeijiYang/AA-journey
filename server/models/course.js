var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var CourseSchema = new Schema({
  name: String,
  summary: String,
  price: Number,
  poster: String,
  cat: {
    // 注意，这里是反向引用，可以节省数据库查询时间
    type: ObjectId,
    ref: 'Cat'
  },
})
module.exports = mongoose.model('Course',CourseSchema);
