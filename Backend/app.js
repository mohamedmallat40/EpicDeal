const express = require('express');
const app = express();

app.use((req, res, next)=>{
  console.log('first middlware');
  next();
});

app.use((req, res, next)=>{
  res.send('Hello frome express!')
});


module.exports = app;
