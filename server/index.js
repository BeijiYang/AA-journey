var express = require('express');
var app = express();
var routes = require('./routes');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var cors = require('cors');

app.use(cors());

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/aa-joureny-demo');


routes(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // 针对 form表单

var db = mongoose.connection;
db.on('error',console.log);
db.once('open',function(){

  console.log('success!');
});





app.listen('3000',function(){
  console.log('your server is running on port 3000');
});
