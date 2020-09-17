const mongoose = require('mongoose');

user = new mongoose.Schema({
	username:{
		type:String,
		required:true
	},
	fname:{
		type:String,
		required:true
	},
	lname:{
		type:String,
		required:true
	},
	age:{
		type:Number,
		required:true
	}
},
	{ collection: 'user' }
);

exports.User = mongoose.model('User',user);