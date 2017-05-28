// var Product = require('../models/product');
var Course = require('../models/course');
var Cat = require('../models/cat');

exports.detail = function (req,res) {
  var id = req.params.id;
  Course.findById(id).populate('cat', 'name').exec(function(err, product){
    if (err) return res.status(400).json({msg:'获取商品详情失败',err});
    res.json({
      msg: '获取商品详情成功',
      product
    })
  })
}
// admin new product
exports.new = function (req, res) {
  var courseObj = req.body;
  var catId = req.body.cat;
  //console.log(catId);
  Cat.findById(catId, function (err, cat) {
    if (err) return res.status(400).json({msg: '分类获取失败',err})
    if (!cat) {
      res.status(400).json({
        msg: '分类不存在'
      })
    }else {
      var course = new Course(courseObj);
      course.save(function (err, newCourse) {
        if (err) return res.status(500).json({msg: '新增商品失败', err});
        cat.courses.push(newCourse._id)
        cat.save(function (err) {
          if (err) return res.status(500).json({msg: '分类添加商品失败',err});
          res.json({
            msg: '新增商品成功',
            course: newCourse
          })
        })
      })
    }
  })
}
// delete pruduct
exports.del = function (req,res) {
  var id = req.params.id;
  if (id) {
    Course.remove({_id: id}, function (err,product) {
      if (err) return res.status(400).json({msg: '删除商品失败',err});
      res.json({
        msg: '删除商品成功'
      })
    })
  }else {
    res.status(400).json({
      msg: '请传入要删除的商品_id'
    })
  }
}
// 获取所有商品或对应分类的商品
exports.findAll = function (req, res) {
  Course.count({}, function (err, totalCount) {
    if (err) return res.status(500).json({msg: '获取总数失败',err});
    Course
      .find({})
      .populate('category', 'name')
      .exec(function (err, courses) {
        if (err) return res.status(400).json({msg: '获取商品失败',err})
        res.json({
          msg:'获取商品成功',
          courses,
          totalCount
        })
      })
  });
}
