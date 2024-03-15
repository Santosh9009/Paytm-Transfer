const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./config');

const authmiddleware=(req,res,next)=>{
  const authheader = req.headers.authorization;

  if(!authheader || !authheader.startwith('Bearer ')){
    res.staus(403).json({})
  }

  const token = authheader.split(' ')[1];
  try{
    const decoded = jwt.verify(token,JWT_SECRET);
    if(decoded.userid){
      req.userid = decoded.userid
    }
    next();
  }catch(error){
    res.status(403).json({})
  }
}

module.exports ={
  authmiddleware
}