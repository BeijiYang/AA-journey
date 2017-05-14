const Cat = require('../models/cat');

exports.add = function(req ,res) {

  var _category = req.body;

  var category = new Cat(_category);

  category.save(function (err, category) {
    if (err) return res.status(403).json({err,msg:'添加失败请重试'});
    res.json({
      msg: '分类添加成功',
      category
    })
  })

  console.log('Hello World');
}

exports.list = function(req ,res) {

  Cat.find({},'name',function (err, cats) {
      if (err) return res.status(500).json({err, msg: '获取分类失败，请重试'});
      res.json({
        msg: '获取分类成功',
        cats
      })
    })
}

// exports.read = function (req, res) {
//     res.send('How you doing~');
//     console.log('Joey');
// }

exports.del = function (req,res) {
  console.log(req.query);
  var id = req.query.id;
  if (id) {
    Cat.remove({_id: id}, function (err,category) {
      if (err) return res.status(400).json({msg:'删除分类失败，请重试'});
      res.json({
        msg: '删除成功'
      })
    })
  }else {
    res.status(400).json({msg:'请求失败'})
  }
}
