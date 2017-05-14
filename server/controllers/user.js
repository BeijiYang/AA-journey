var User = require('../models/user');
// 注册
exports.signup = function (req, res) {
  var _user = req.body;
  User.findOne({username:_user.username},function (err,user) {
    if (err) return res.status(500).json({msg: '注册失败，请重试',err});
    if (user) {
      return res.status(403).json({msg: '用户名重复，请重新注册'})
    }else {
      // 这里不适用 var 声明是因为函数的形参有了这个变量，为 null
      user = new User(_user);
      user.save(function (err,user) {
        if (err) return res.status(500).json({msg: '注册失败，请重试',err});
        res.json({
          userId: user._id,
          username: user.username,
          msg: '注册成功'
        })
      })
    }
  })
}
// 登陆
exports.signin = function (req, res) {
  var _user = req.body;
  User.findOne({username:_user.username},function (err,user) {
    if (err) return res.status(500).json({msg: '登陆失败，请重试',err});
    if (!user) {
      return res.status(401).json({msg: '登陆失败，用户名不存在'})
    }
    user.comparePassword(_user.password, function (err, isMatch) {
      if (err) return res.status(500).json({msg: '登陆失败，请重试',err});
      if (isMatch) {
        res.json({
          userId: user._id,
          user: user.username,
          msg: '登陆成功'
        })
      }else {
        res.status(401).json({msg: '密码错误，请核对后重试'})
      }
    })
  })
}
// 登出功能
exports.logout = function (req,res) {
  res.json({ msg: '登出成功' })
}

// 通过 id 拿到用户信息
exports.getById  = function (req, res) {
   User.findOne({_id: req.params.userId},function (err,user) {
     if (err) return res.status(500).json({msg: '查找用户失败',err});
     if (user) {
       return res.json({msg: '读取用户成功', user})
     }
   })
 }
