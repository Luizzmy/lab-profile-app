  
const express = require("express");
const passport = require('passport');
const router = express.Router();
const{
    signUpProcess,
    loginProcess,
    updateUser,
    currentUser,
    logout,
    uploadFile,
}=require('../contollers/auth')

router.post('/login', loginProcess)

router.post('/signup', signUpProcess)

router.post('/edit/:id', updateUser)

router.post('/logout', logout)

router.post('/upload/:id', uploadFile)

router.get('/loggedin', currentUser)

module.exports=router