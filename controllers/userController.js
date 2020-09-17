const express = require('express');
const bodyparser = require('body-parser');

const userModel = require('../models/userModel');

userRoute = express.Router();
//userRoute.use(bodyparser.json());
userRoute.route('/')
.get((req,res)=>{
	userModel.User.find({},(err, user)=>{
		//res.setHeader('Content-Type','application/json');
		//res.json(user);
		res.setHeader('Content-Type','text/html');
		res.setHeader('Accept', 'text/html');
		res.render("display",{"users":user});
	});
})
.post((req,res)=>{	
	console.log(req.body);
	userModel.User.create(req.body)
	.then((user)=>{
		//res.setHeader('Content-Type','application/json');
		//res.json(user);
		res.setHeader('Content-Type','text/html');
		res.setHeader('Accept', 'text/html');
		res.redirect('/user');
	});
});

userRoute.route('/:id/edit')
.post((req,res)=>{
	//userModel.User.remove({"_id":req.params.id})
	userModel.User.findOneAndUpdate({"_id":req.params.id},{$set:req.body},{new:true})
	.then((user)=>{
		//res.setHeader('Content-Type','application/json');
		//res.json(user);
		res.setHeader('Content-Type','text/html');
		res.setHeader('Accept', 'text/html');
		res.redirect('/user');
	});
});

userRoute.route('/:id/delete')
.get((req,res)=>{
	userModel.User.findOneAndRemove({"_id":req.params.id})
	.then((user)=>{
		//res.setHeader('Content-Type','application/json');
		//res.json(user);
		res.redirect('/user');
	});
});

userRoute.route('/username/:data')
.put((req,res)=>{
	//userModel.User.remove({"_id":req.params.id})
	userModel.User.updateMany({"username":req.params.data},{$set:req.body})
	.then((user)=>{
		res.setHeader('Content-Type','application/json');
		res.json(user);
	});
});

userRoute.route('/view')
.get((req,res)=>{
	console.log('add');
	res.render('adduser');
});
userRoute.route('/view/:id')
.get((req,res)=>{
	console.log('edit');
	userModel.User.findOne({"_id":req.params.id})
	.then((user)=>{
		res.render('adduser',{'user':user});
	});
	
});

exports.user = userRoute;