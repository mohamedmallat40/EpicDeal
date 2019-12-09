
const express = require('express');
const Post= require('../models/post');



const router = express.Router();

router.post("/api/posts",(req, res, next) => {
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
router.get("/api/posts",(req, res, next) => {
  Post.find().then(documents =>{
    res.status(200).json({
      message: 'Posts fetched succsesfuly',
      posts: documents
      });
   });
});




router.get("/api/posts/:id",(req,res,next) => {
  Post.findById(req.params.id).then(post => {
      if (post) {
        res.status(200).json(post);
      }else {
        res.status(404).json({message:'Post not found'});
      }
  });
});



//edit methode
router.put("/api/posts/:id",(req, res, next) => {
  const post = new Post({
      _id: req.body.id,
      title: req.body.title,
      content: req.body.content
  });
  Post.updateOne({_id:req.params.id}, post ).then(result => {
    console.log(result);
    res.status(200).json({message:'Post updated seccessfuly'});
  });
});


// delete methode
router.delete("/api/posts/:id",(req, res, next) => {
    console.log(req.params.id);
    Post.deleteOne({_id: req.params.id}).then (result=> {
      res.status(200).json({message: 'Post deleted'})
   });
});


module.exports = router;
