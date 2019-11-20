const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//routes
const postRoutes = require('./api/routes/post');
const userRoutes = require('./api/routes/user');

//connect mongodb
mongoose.connect('mongodb+srv://node-rest-shop:'+process.env.MONGO_PASS+'@cluster0-brt1k.mongodb.net/test?retryWrites=true&w=majority',{
   useMongoClient : true 
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded(
    {
        extended : false
    }
));

app.use(bodyParser.json());

//CORS
app.use((req, res , next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','GET, PUT, POST, PATCH, DELETE');
        return res.status(200).json({});

    }
    next();
});

//mapping apis 
app.use('/post',postRoutes);
app.use('/user',userRoutes);



app.use((req, res , next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error,req, res , next) => {
   res.status(error.status || 500);
   res.json({
       error : {
           message : error.message
       }
   });
});

module.exports = app; 