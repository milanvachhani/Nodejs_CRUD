const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require('ejs');


app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json());


app.listen(3000,()=>{
	console.log('server listening at post 3000...');
});

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify:false}, (err)=>{
	if(!err)
		console.log('MongoDB database connection successfully.');
	else
		console.log('Error in MongoDB database connection');
});


// Models
const userModel = require('./models/userModel');

//Controllers
const userController = require('./controllers/userController');
/*
//Routes
const userRoute = require('./routes/userRoute');
*/


app.use('/user',userController.user);
/*app.use('/adduser',(req,res)=>{
	console.log('add');
	res.render('adduser');
});
app.use('/adduser/:id',(req,res)=>{
	console.log('edit');
	res.render('adduser',{'id':req.params.id});
});*/


app.use("/",(req, res)=>{
	//console.log('testing');
	res.send('home');
	//res.render("display");
});