const express = require('express');
const { route } = require('./user');
const { authmiddleware } = require('../middleware');
const { User } = require('../db');
const router = express.Router();

router.get('/',authmiddleware,async(req,res)=>{
    const user = await User.findOne({_id:req.userid})
    if(user){
      res.status(200).json({
        name: user.firstname
      })
    }
})


module.exports = router;