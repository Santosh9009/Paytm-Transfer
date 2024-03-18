const express = require('express');
const { authmiddleware } = require('../middleware');
const { Account } = require('../db');
const { default: mongoose } = require('mongoose');
const z = require('zod')

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


const transferbody = z.object({
  to:z.string(),
  amount: z.number(),
})
// transfer money
router.post('/transfer',authmiddleware,async(req,res)=>{

  const check = await transferbody.safeParse(req.body);
  if(!check){
    res.status(411).json({
      message: "Invalid inputs"
    })
  }
  const session = await mongoose.startSession();

  session.startTransaction();

 try{
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
    await session.abortTransaction();
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

 }catch{
  session.abortTransaction();
  res.status(400).json({
    message: "transaction failed"
  })
 }

})

module.exports = router;