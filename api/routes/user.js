const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//user login
router.post('/login',(req, res, next)=> {
    User.findOne({email: req.body.email})
    .exec()
    .then(user => {
        if(user.length < 1){
            return res.status(404).json({
                message : 'Mail not found'
            });
        }
        bcrypt.compare(req.body.password, user.password, (error,result)=>{
            if(error){
                return res.status(402).json({
                    message : 'Login failed'
                });
            }
            if(result){
                
             const token = jwt.sign({
                    email : user.email,
                    userId : user._id
                },process.env.JWT_KEY,
                {
                  expiresIn : "1h"  
                }
                );
               
                return res.status(200).json({
                   message : 'Auth successful',
                   token : token,
                   userId : user._id,
                   userName : user.name
                });
            }

            res.status(401).json({
                message : 'Login failed'
            });
            
        });
    })
    .catch(error => {
               console.log(error);
               res.status(500).json({
                   error : error
               });
            });
});

//user register
router.post('/signup', (req, res, next) => {  
    bcrypt.hash(req.body.password,10,(error,hash)=> {
        console.log(req.body);
        if(error){
           return  res.status(500).json({
               error : error
           });
        }
        else{
            const user = new User({
                _id : new mongoose.Types.ObjectId(),
                name : req.body.name,
                email : req.body.email,
                age : req.body.age,
                phoneNo : req.body.phoneNo,
                password : hash
            });

            user.save()
            .then(result => {
                console.log(result);
                res.status(201).json({
                   message : 'User Created' 
                });
            })
            .catch(error => {
               console.log(error);
               res.status(500).json({
                   error : error
               });
            });
        }
       });

});

//get user
router.get('/:userId',(req, res, next) => {
    const id = req.params.userId;
   User.findById(id)
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


module.exports = router;