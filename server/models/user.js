var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;
var ObjectId = mongoose.Schema.Types.ObjectId;

var UserSchema = new mongoose.Schema(
  {
    username: { type:String, maxlength: 18 },
    password: String,
    // admin>10
    role: { type: Number, default: 0 },
    shops: [{ type: ObjectId, ref: 'Shopping' }]
  },
  {timestamps:true}
)
// Schema(模式)的中间件方法，这里用不了了。。。因为在购物车里会有save方法的调用，会再次触发这个方法，导致密码出问题
// e,这里还是不换了，将shopping中改为了更新方法
UserSchema.pre('save',function (next) {
  var user = this;

  bcrypt.genSalt(SALT_WORK_FACTOR, function (err,salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next()
    })
  })
})

// user 的实例方法
UserSchema.methods = {
  comparePassword: function (_password, cb) {
    // console.log(_password);
    console.log(this.password);
    bcrypt.compare(_password, this.password, function (err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
    })
  }
}

module.exports = mongoose.model('User',UserSchema);
