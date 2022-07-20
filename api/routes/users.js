var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
const userModel = require('../models/users.model');

/* GET users listing. */
router.get('/list', function(req, res, next) {

  userModel.find(function(err, userListResponse){

    if(err){
      res.send({status: 500, message: "Unable to find users!"});
    }
    else {
      const length = userListResponse.length;
      res.send({status: 200, recordCount: length, results: userListResponse});
    }

  });

});

/* GET user detail. */
router.get('/view', function(req, res, next) {

  const userId = req.query.userId;

  userModel.findById(userId, function(err, userResponse){

    if(err){
      res.send({status: 500, message: "Unable to find user!"});
    }
    else {
      res.send({status: 200, results: userResponse});
    }

  });

});
/* create users listing. */
router.post('/add', function(req, res, next) {

  let name =  req.body.name;
  let mail =  req.body.mail;
  let dob =  req.body.dob;

  let userObj =  new userModel({
    name: name,
    mail: mail,
    dob: dob
  });

  userObj.save(function(err, userObj){

    if(err){
      res.send({status: 500, message: "Unable to add user!"});
    }
    else {
      res.send({status: 200, message: "Successful!", userDetail: userObj});
    }

  });

});

/* update users listing. */
router.put('/update', function(req, res, next) {

  const userId = req.body.userId;

  let name =  req.body.name;
  let mail =  req.body.mail;
  let dob =  req.body.dob;

  let newUserObj = {
    name: name,
    mail: mail,
    dob: dob
  };
  userModel.findByIdAndUpdate(userId, newUserObj, function(err, userResponse){

    if(err){
      res.send({status: 500, message: "Unable to update user!"});
    }
    else {
      res.send({status: 200, message: 'User Updated!', results: newUserObj});
    }

  });

});

/* delete user. */
router.delete('/delete', function(req, res, next) {

  const userId = req.query.userId;

  userModel.findByIdAndDelete(userId, function(err, userResponse){

    if(err){
      res.send({status: 500, message: "Unable to delete user!"});
    }
    else {
      res.send({status: 200, message: 'User Deleted!', results: userResponse});
    }

  });

});

/* delete users. */
router.delete('/delete-users', function(req, res, next) {

  const userId = req.query.userId;

  userModel.deleteMany({'name':'Nay Nay'}, function(err, userResponse){

    if(err){
      res.send({status: 500, message: "Unable to delete users!"});
    }
    else {
      res.send({status: 200, message: 'Users Deleted!', results: userResponse});
    }

  });

});

module.exports = router;
