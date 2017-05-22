 var Order = require('../models/order');

 // add new order
 exports.add = function (req, res) {
   var _order = req.body;
   var order = new Order(_order);
   order.save(function (err, order) {
     if (err) return res.status(403).json({err,msg:'添加失败请重试'});
     res.json({
       msg: '订单添加成功',
       order
     })
   })
 }

 exports.list = function (req, res) {
    Order.find({}, function (err, orders) {
      if (err) return res.status(500).json({err, msg: '获取失败，请重试'});
      res.json({
        msg: '获取成功',
        orders
      })
    })
  }
