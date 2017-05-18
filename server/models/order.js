 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var OrderSchema = new Schema({
   userId: String,
   products: Array
 })
 module.exports = mongoose.model('Order', OrderSchema);
