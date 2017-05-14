var Cat = require('./controllers/cat');
var Product = require('./controllers/product');
var User = require('./controllers/user');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();


module.exports = function(app) {
  // app.get('/',Cat.read);
  app.get('/cats',Cat.list);
  app.post('/cat',jsonParser,Cat.add);
  app.delete('/cat',Cat.del);



  app.get('/product/all',Product.findAll);
  app.get('/product/detail/:id',Product.detail);
  app.post('/product/new',jsonParser,Product.new);

  app.post('/user/signup',jsonParser,User.signup);
  app.post('/user/login',jsonParser,User.signin);
  app.get('/user/logout', User.logout);
  app.post('/user/getById', User.getById);
  app.get('/user/:userId', User.getById)
}
