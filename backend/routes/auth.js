import express from 'express';
// const passport = require("passport");

import User from '../models/User.js';
const router = express.Router();
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import fetchuser from '../middleware/fetchuser.js';
import success  from 'concurrently/src/defaults.js';
// const { success } = require('concurrently/src/defaults');



const JWT_SECRET = "MaiHuEkUdtaRobo";
//Create a User using : POST "api/auth/createuser". no login required
router.post('/createuser',[
    body('username','Enter a valid username').isLength({min:3}),
    body('email',  'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({min:5}),
] ,async(req, res) =>{
  let success= false;
  //If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({success, errors: errors.array() });
  }
  //Check whether the User with this email exists already
  try {
    let user = await User.findOne ({email: req.body.email});
    if(user){
        return res.status(400).json({success, error:"Sorry a user with this email already exists"}) 
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash( req.body.password, salt);
    //Create a new user
    user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: secPass,
      })
      const data ={
          user:{
              id: user.id
          }
      }
      const authtoken =jwt.sign (data, JWT_SECRET);
      
    // res.json(user) 
    success=true;
    res.json({success, authtoken})      
} catch (error) {
    console.error(error.message);
    res.status(500).send("Some Error Occured")
}
})

//google auth
// const CLIENT_URL = "http://localhost:3000/home";

// router.get("/login/success", (req, res) => {
//   if (req.user) {
//     res.status(200).json({
//       success: true,
//       message: "successfull",
//       user: req.user,
//       //   cookies: req.cookies
//     });
//   }
// });

// router.get("/login/failed", (req, res) => {
//   res.status(401).json({
//     success: false,
//     message: "failure",
//   });
// });

// // router.get("/logout", (req, res) => {
// //   req.logout();
// //   res.redirect(CLIENT_URL);
// // });

// router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// router.get(
//   "/google/callback", 
//   passport.authenticate("google", {
//     successRedirect: CLIENT_URL,
//     failureRedirect: "/login/failed",
//   })
// );

//Authenticate a User using : POST "api/auth/login". no login required
router.post('/login',[
    body('email',  'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),

] ,async(req, res) =>{
  let success= false;
  //If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {email, password}= req.body;
  try{
      // let token;
    let user =await User.findOne({email});
    if(!user){
      return res.status(400).json({error:"Please try to login with correct credentials"});
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    
    // token = await user.generateAuthToken();
    // console.log(token)

    if(!passwordCompare){ 
      success= false;
      return res.status(400).json({ success, error:"Please try to login with correct credentials"});
    }

    const data ={
      user:{
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    success= true;
    res.json({success, authtoken})
  
    } catch(error){
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
  
});

//Get logged in User details using : POST "api/auth/getuser". login required
router.post('/getuser',fetchuser ,async(req, res) =>{
try {
  userId = req.user.id;
  const user = await User.findById(userId).select ("-password")
  res.send(user)
} catch (error) {
  console.log(error.message);
  res.status(500).send("Internal server error");
}
})

// Logout
 router.get('/logout',(req, res)=>{
  //  console.log()
  res.clearAuthToken('authtoken', {path:'/login'});
  res.status(200).send('User Logout')
 })

 //get user data for contact us
//  router.get('/getdata', fetchuser, (req,res) =>{
//    console.log('yoyo my about');
//    res.send(req.rootUser);
//  })

export default  router;


// const express = require('express');
// // const passport = require("passport");
// const User = require('../models/User');
// const router = express.Router();
// const { body, validationResult } = require('express-validator');
// const bcrypt = require('bcryptjs');
// var jwt = require('jsonwebtoken');
// var fetchuser = require('../middleware/fetchuser');
// const { success } = require('concurrently/src/defaults');


// const JWT_SECRET = "MaiHuEkUdtaRobo";
// //Create a User using : POST "api/auth/createuser". no login required
// router.post('/createuser',[
//     body('username','Enter a valid username').isLength({min:3}),
//     body('email',  'Enter a valid email').isEmail(),
//     body('password', 'Password must be atleast 5 characters').isLength({min:5}),
// ] ,async(req, res) =>{
//   let success= false;
//   //If there are errors, return Bad request and the errors
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({success, errors: errors.array() });
//   }
//   //Check whether the User with this email exists already
//   try {
//     let user = await User.findOne ({email: req.body.email});
//     if(user){
//         return res.status(400).json({success, error:"Sorry a user with this email already exists"}) 
//     }
//     const salt = await bcrypt.genSalt(10);
//     const secPass = await bcrypt.hash( req.body.password, salt);
//     //Create a new user
//     user = await User.create({
//         username: req.body.username,
//         email: req.body.email,
//         password: secPass,
//       })
//       const data ={
//           user:{
//               id: user.id
//           }
//       }
//       const authtoken =jwt.sign (data, JWT_SECRET);
      
//     // res.json(user) 
//     success=true;
//     res.json({success, authtoken})      
// } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Some Error Occured")
// }
// })

// //google auth
// // const CLIENT_URL = "http://localhost:3000/home";

// // router.get("/login/success", (req, res) => {
// //   if (req.user) {
// //     res.status(200).json({
// //       success: true,
// //       message: "successfull",
// //       user: req.user,
// //       //   cookies: req.cookies
// //     });
// //   }
// // });

// // router.get("/login/failed", (req, res) => {
// //   res.status(401).json({
// //     success: false,
// //     message: "failure",
// //   });
// // });

// // // router.get("/logout", (req, res) => {
// // //   req.logout();
// // //   res.redirect(CLIENT_URL);
// // // });

// // router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// // router.get(
// //   "/google/callback", 
// //   passport.authenticate("google", {
// //     successRedirect: CLIENT_URL,
// //     failureRedirect: "/login/failed",
// //   })
// // );

// //Authenticate a User using : POST "api/auth/login". no login required
// router.post('/login',[
//     body('email',  'Enter a valid email').isEmail(),
//     body('password', 'Password cannot be blank').exists(),

// ] ,async(req, res) =>{
//   let success= false;
//   //If there are errors, return Bad request and the errors
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   const {email, password}= req.body;
//   try{
//       // let token;
//     let user =await User.findOne({email});
//     if(!user){
//       return res.status(400).json({error:"Please try to login with correct credentials"});
//     }

//     const passwordCompare = await bcrypt.compare(password, user.password);
    
//     // token = await user.generateAuthToken();
//     // console.log(token)

//     if(!passwordCompare){ 
//       success= false;
//       return res.status(400).json({ success, error:"Please try to login with correct credentials"});
//     }

//     const data ={
//       user:{
//         id: user.id
//       }
//     }
//     const authtoken = jwt.sign(data, JWT_SECRET);
//     success= true;
//     res.json({success, authtoken})
  
//     } catch(error){
//     console.log(error.message);
//     res.status(500).send("Internal server error");
//   }
  
// });

// //Get logged in User details using : POST "api/auth/getuser". login required
// router.post('/getuser',fetchuser ,async(req, res) =>{
// try {
//   userId = req.user.id;
//   const user = await User.findById(userId).select ("-password")
//   res.send(user)
// } catch (error) {
//   console.log(error.message);
//   res.status(500).send("Internal server error");
// }
// })

// // Logout
//  router.get('/logout',(req, res)=>{
//   //  console.log()
//   res.clearAuthToken('authtoken', {path:'/login'});
//   res.status(200).send('User Logout')
//  })

//  //get user data for contact us
// //  router.get('/getdata', fetchuser, (req,res) =>{
// //    console.log('yoyo my about');
// //    res.send(req.rootUser);
// //  })

// module.exports = router