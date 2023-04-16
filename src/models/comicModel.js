const mongoose = require('mongoose');

const comicSchema = mongoose.Schema({
    c_name:{
        type:String,
        required:true,
    },
    author_name:{
        type:String,
        required:true,
    },
    page:{
        type:Number,
        required:true,
    },
    
})