const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const SFH = require('cors');
const Post= require('./models/post');
const mongoose= require('mongoose');



// mongoose.connect('mongodb+srv://mohamed:77240080mM@cluster0-jhfe6.mongodb.net/node-angular?retryWrites=true&w=majority',
//   {   useUnifiedTopology: true,
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true })
// .then(()=> {
//   console.log('Connected to DataBase!');
// })
// .catch(()=>{
//   console.log('Connection Faild !!');
// });


mongoose.connect("mongodb://localhost/hamadb" , { useNewUrlParser: true })
        .then( () => {
            console.log('Connected to the Database !');
        })
        .catch( () => {
            console.log('Connection failed !');
        })






app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(SFH())




app.post("/api/posts",(req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save().then(createdPost => {
    res.status(201).json({
      message: 'post added sucessfully',
      postId: createdPost._id
    });
  });
});

// fetch Data => njibo Data mil Base de donnee

app.get("/api/posts",(req, res, next) => {
  Post.find().then(documents =>{
    res.status(200).json({
      message: 'Posts fetched succsesfuly',
      posts: documents
      })
   })
});


// delete methode

app.delete("/api/posts/:id",(req, res, next) => {
    console.log(req.params.id);
    Post.deleteOne({_id: req.params.id}).then (result=> {
      res.status(200).json({message: 'Post deleted'})
   })
});



module.exports = app;
