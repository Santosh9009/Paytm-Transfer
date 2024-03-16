const express = require("express");
const app= express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

const rootrouter = require('./routes/index')
app.use('/api/v1', rootrouter )



app.listen(port, ()=>{
  console.log(`Running on port ${port}`);
})