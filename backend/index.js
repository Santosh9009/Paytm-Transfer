const express = require("express");
const app= require(express);
const port = 3000;
const cors = require('cors');

const rootrouter = require('./routes/index')

app.use(cors());
app.use(express.json());
app.use('api/v1', rootrouter )



app.listen(port, ()=>{
  console.log(`Running on port ${port}`);
})