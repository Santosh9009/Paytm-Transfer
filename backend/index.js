const express = require("express");
const app= require(express);
const port = 3000;

const rootrouter = require('./routes/index')


app.use('api/v1', rootrouter )



app.listen(port, ()=>{
  console.log(`Running on port ${port}`);
})