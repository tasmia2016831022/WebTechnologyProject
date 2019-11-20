const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const mongoose = require('mongoose');
const checkAuth = require('../middleware/checkauth');


//get all posts
router.get('/',(req, res, next) => {

    Post.find()
    .exec()
    .then(docs => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch( error => {
      console.log(error);
      res.status(500).json({
        error : error
      });
      
    });
});

//get mypost
router.get('/mypost/:userId',(req, res, next) => {
  Post.find({userId : req.params.userId})
  .exec()
  .then(docs => {
    console.log(docs);
    res.status(200).json(docs);
  })
  .catch( error => {
    console.log(error);
    res.status(500).json({
      error : error
    });
    
  });
});


//posting
router.post('/', (req, res, next) => {
    const post = new Post({
      _id : new mongoose.Types.ObjectId(),
      title : req.body.title,
      content : req.body.content,
      userId : req.body.userId,
      userName : req.body.userName,
      rating : 0,
      ratingCount : 0
    });
    
    post.save().then(result => {
      console.log(result);
      res.status(201).json({
        message : 'Posted Successfully',
        post : post
      });
      
    }).catch(error => {
      console.log(error),
      res.status(500).json({error:error});
    });

  
});

//get a post
router.get('/:postId',(req, res, next) => {
   const id = req.params.postId;
  Post.findById(id)
  .exec()
  .then(doc => {
    console.log(doc);
    if(doc){
    res.status(200).json(doc);
    }else{
      res.status(404).json({
        message : 'No vaild data'
      });
    }
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({error:error});
  });
});

//delete a post
router.delete("/:postId", (req, res, next)=>{
const id = req.params.postId;
Post.remove({
  _id : id
})
.exec()
.then(result => {
  res.status(200).json(result);
})
.catch(error => {
  console.log(error);
  res.status(500).json({
  error : error
  });
  
});
});

//patch a post
router.patch("/:postId",(req, res, next)=> {
 const id = req.params.postId;
 const updateOps = {};

 for(const ops of req.body){
   updateOps[ops.propName] = ops.value;
 }

 Post.update({_id : id},{$set : updateOps })
 .exec()
 .then(result => {
   console.log(result);
   res.status(200).json(result);
 })
 .catch(error => {
  console.log(error);
  res.status(500).json({
    error : error
  });
  
 });
});

module.exports = router;