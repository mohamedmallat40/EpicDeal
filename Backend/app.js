const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const SFH = require('cors');
const Post= require('./models/post');
const mongoose= require('mongoose');




mongoose.connect('mongodb+srv://mohamed:77240080mM+@cluster0-jhfe6.mongodb.net/test?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
.then(()=> {
  console.log('Connected to DataBase!');
})
.catch(()=>{
  console.log('Connection Faild !!');
});




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(SFH())

// app.get((req,res,next) => {
//   res.setHeader('Access-Control-Allow-Origin','*');
//   res.setHeader(
//     'Aceess-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept');
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'GET, POST, PATCH, DELETE, OPTIONS'
//     );
//     next();
//   });





app.post("/api/posts",(req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  console.log(post);
  res.status(201).json({
    message: 'post added sucessfully'
  });
});





app.get("/api/posts",(req, res, next) => {
  const posts = [
    {
      id: "klevpe",
      title: "Xnxxzeda",
      content: "xnxxerijpbvpr"
    }
  ];
  res.status(200).json({
    message: 'Posts fetched succsesfuly',
    posts: posts
  })
});





module.exports = app;
