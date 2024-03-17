const express = require('express');
const { authmiddleware } = require('../middleware');
const { Account } = require('../db');
const { default: mongoose } = require('mongoose');

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

// transfer money
router.post('/transfer',authmiddleware,async(req,res)=>{
  const session = await mongoose.startSession();

  session.startTransaction();
  const {amount, to} = req.body;

  const account = await Account.findOne({userid : req.userid}).session(session);

  if(!account || account.balance < amount){
    await session.abortTransaction();
    res.status(400).json({
      message: 'Insufficient balance'
    })
  }

  const toaccount = await Account.findOne({userid: to}).session(session);

  if(!toaccount){
    res.status(400).json({
      message: "Invalid account"
    })
  }

  // transaction
  await Account.updateOne({userid:req.userid},{$inc:{balance:-amount}}).session(session)
  await Account.updateOne({userid:to},{$inc:{balance:amount}}).session(session)

  await session.commitTransaction();
  res.json({
    message: 'Transfer completed'
  })

})

module.exports = router;