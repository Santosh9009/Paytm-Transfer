const express = require('express');
const meRouter = require('./me');
const userRouter = require('./user');
const accountRouter = require('./account');
const { Account } = require('../db');

const router = express.Router();

router.use('/me',meRouter);
router.use('/user',userRouter);
router.use('/account',accountRouter);

module.exports = router;