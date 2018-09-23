const path = require('path');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
const express = require('express');

var app = express();

// fire up the middleware

app.use(express.static(publicPath));

app.listen(3000,()=>{
  console.log(`server fired up on port ${port}`);
});
