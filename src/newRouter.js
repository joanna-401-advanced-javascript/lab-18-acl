'use strict';

const express = require('express');
const newRouter = express.Router();

const User = require('./model/user.js');
const Article = require('./model/article.js');
const auth = require('./middleware/auth.js');
const oauth = require('./oauth/google.js');
const Role = require('./model/role');

newRouter.get('/create-roles', (req, res, next) => {
  const admin = new Role({role: 'admin', capabilities: ['create', 'read', 'update', 'delete']});
  const editor = new Role({role: 'editor', capabilities: ['create', 'read', 'update']});
  const user = new Role({role: 'user', capabilities: ['read']});
});


// newRouter.get('/something-to-read', auth('read'), (req, res, next) => {
//   res.send({user: req.user, message: 'Can read'});
// });

newRouter.post('/create-a-thing', auth('create'), (req, res, next) => {
  res.send({user: req.user, message: 'Can post'});
});

newRouter.put('/update', auth('update'), (req, res, next) => {
  res.send({user: req.user, message: 'Can put'});
});

// newRouter.delete('/bye', auth('delete'), (req, res, next) => {
//   res.send({user: req.user, message: 'Can delete'});
// });

module.exports = newRouter;