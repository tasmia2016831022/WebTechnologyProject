const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    title : String,
    content : String,
    userId : String,
    userName : String,
    rating : Number,
    ratingCount : Number
});

module.exports = mongoose.model('Post',postSchema);