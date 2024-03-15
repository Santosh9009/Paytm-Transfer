const express = require('express');
const router = express.Router();
const z = require('zod');
const {User} = require('../db');
const {JWT_SECRET} = require('../config');
const jwt = require('jsonwebtoken');
const { authmiddleware } = require('../middleware');


const signupbody = z.object({
   username : z.string().email(),
   firstname : z.string(),
   lastname : z.string(),
   password : z.string()
})


// signup 
router.post('/signup',async(req,res)=>{

  const check = signupbody.safeParse(req.body);

  if(!check.success){
    return res.status(411).json({
      message: 'Email already taken / Incorrect inputs'
    })
  }
  
  
  const existinguser =await User.findOne({username: req.body.username})
  if(existinguser){
    return res.status(411).json({
      message:"Email already taken / Incorrect inputs"
    })
  }

  const user = await User.create({
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password
  })
  const userid = user._id;
  
  const token = jwt.sign({userid},JWT_SECRET)
  
  res.status(200).json({
    message: "user created successfully",
    token : token
  })
  
})

const singinbody = z.object({
  username: z.string.email(),
  password: z.string()
})


// signin
router.post('/signin',async(req,res)=>{
  const check = singinbody.safeParse(req.body);

  if(!check.success){
    return res.status(411).json({
      message: 'Email already taken / Incorrect inputs'
    })
  }

  const existinguser =await User.findOne({username: req.body.username})
  if(existinguser){
   const token = jwt.sign({userid: existinguser._id},JWT_SECRET);

   return res.status(200).json({
    token: token
   })
   
  }

  res.status(411).json({
    message : 'Error while logging in'
  })

})

const updatebody = z.object({
  username : z.string().email().optional(),
  firstname : z.string().optional(),
  lastname : z.string().optional(),
  password : z.string().optional(),
})

// update info
router.put('/',authmiddleware,async(req,res)=>{
  const {success} = updatebody.safeParse(req.body);
  if(!success){
    return res.status(411).json({
      message: 'Error while updating information'
    })
  }

  await User.updateOne({_id:req.userid},req.body)

  res.status(200).json({
    message : 'Updated successfully'
  })

})

module.exports = router;