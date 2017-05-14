var Product = require('../models/product');
var Cat = require('../models/cat');

exports.detail = function (req,res) {
  var id = req.params.id;
  Product.findById(id).populate('cat', 'name').exec(function(err, product){
    if (err) return res.status(400).json({msg:'获取商品详情失败',err});
    res.json({
      msg: '获取商品详情成功',
      product
    })
  })
}
// admin new product
exports.new = function (req, res) {
  var productObj = req.body;
  var catId = req.body.cat;
  console.log(catId);
  Cat.findById(catId, function (err, cat) {
    if (err) return res.status(400).json({msg: '分类获取失败',err})
    if (!cat) {
      res.status(400).json({
        msg: '分类不存在'
      })
    }else {
      var product = new Product(productObj);
      product.save(function (err, newproduct) {
        if (err) return res.status(500).json({msg: '新增商品失败', err});
        cat.products.push(newproduct._id)
        cat.save(function (err) {
          if (err) return res.status(500).json({msg: '分类添加商品失败',err});
          res.json({
            msg: '新增商品成功',
            product: newproduct
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
    Product.remove({_id: id}, function (err,product) {
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
  var limit = parseInt(req.query.limit, 10) || 2;
  var page = parseInt(req.query.page, 10) || 0;
  Product.count({}, function (err, totalCount) {
    if (err) return res.status(500).json({msg: '获取总数失败',err});
    Product
      .find({})
      .limit(limit)
      .skip(page*limit)
      .populate('category', 'name')
      .exec(function (err, products) {
        if (err) return res.status(400).json({msg: '获取商品失败',err})
        res.json({
          msg:'获取商品成功',
          products,
          totalCount
        })
      })
  });
}
