const express =require('express');
const app = express();

app.use((req,res,next)=>{
    res.status(200).json({
        msg:"this works khgjhkfgfhf"
    });
});

module.exports = app;