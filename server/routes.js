var Cat = require('./controllers/cat');
var Course = require('./controllers/course');
var User = require('./controllers/user');
var Order = require('./controllers/order');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();


module.exports = function(app) {

  //cat
  // app.get('/',Cat.read);
  app.get('/cats',Cat.list);
  app.post('/cat',jsonParser,Cat.add);
  app.delete('/cat',Cat.del);



  // app.get('/product/all',Product.findAll);
  // app.get('/product/detail/:id',Product.detail);
  // app.post('/product/new',jsonParser,Product.new);

  //course
  app.get('/course/all',Course.findAll);
  app.get('/course/detail/:id',Course.detail);
  app.post('/course/new',jsonParser,Course.new);
  app.delete('/course/delete/:id',Course.del);

  //account
  app.post('/user/signup',jsonParser,User.signup);
  app.post('/user/login',jsonParser,User.signin);
  app.get('/user/logout', User.logout);
  app.post('/user/getById', User.getById);
  app.get('/user/:userId', User.getById);


  //order
  app.post('/order/new', jsonParser, Order.add)
}
