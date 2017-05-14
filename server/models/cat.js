var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;


const CatSchema = new Schema(
	{
		name:{type:String,require:true,unique:true},
		products: [{
	  type: ObjectId,
	  ref: 'Product'
	}]
	},{
		timestamps:true
	}
);

module.exports = mongoose.model('Cat',CatSchema);
