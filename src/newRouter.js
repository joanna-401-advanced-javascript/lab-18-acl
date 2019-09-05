'use strict';

const express = require('express');
const newRouter = express.Router();

const User = require('./model/user.js');
const Article = require('./model/article.js');
const auth = require('./middleware/auth.js');
const oauth = require('./oauth/google.js');

newRouter.get('/public-stuff', auth, (req, res, next) => {
  res.send({user: req.user, message: 'Can read'});
});

newRouter.post('/create-a-thing', auth('create'), (req, res, next) => {
  res.send({user: req.user, message: 'Can post'});
});

newRouter.put('/update', auth('update'), (req, res, next) => {
  res.send({user: req.user, message: 'Can put'});
});

module.exports = newRouter;