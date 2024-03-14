const express = require("express");
const app= require(express);
const port =3000;


app.listen(port, ()=>{
  console.log(`Running on port ${port}`);
})