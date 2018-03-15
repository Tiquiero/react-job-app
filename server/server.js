const express = require('express');
const mongoose = require('mongoose');
const DB_URL = 'mongodb://127.0.0.1:27017/react-job-app';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
    console.log('mogodb success');
});

const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,required:true},
    age:{type:Number,required:true}
}));
// User.create({
//     user:'zph',
//     age:23
// },function(err,doc){
//     if(!err) console.log(doc);
//     else console.log(err);
// });

const app = express();

// User.remove({age:23},function(err,doc){
//     console.log(doc);
// })

// User.update({age:23},{'$set':{user:'aaa'}},function(err,doc){
//     console.log(doc);
// })

app.get('/',function(req,res){
    res.send('<h1>hello</h1>');
});

app.get('/data',function(req,res){
    User.find({},function(err,doc){
        res.json(doc);
    });
});

app.listen(9093,function(){
    console.log('9093');
});