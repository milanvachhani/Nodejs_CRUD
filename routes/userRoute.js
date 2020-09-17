const express = require('express');
const userController = require('../controllers/userController');

app = express();
app.get('/user',userController.getAll);

export.userController = app;