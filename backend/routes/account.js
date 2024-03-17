const express = require('express');
const { authmiddleware } = require('../middleware');
const { Account } = require('../db');

const router = express.Router();

// get balance
router.get('/balance',authmiddleware,async(req,res)=>{

  const account = await Account.findOne({
    userid: req.userid
  })

  res.status(200).json({
    balance: account.balance
  })
})



module.exports = router;