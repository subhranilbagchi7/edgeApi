const mongoose = require('mongoose')
const pumpSchema = new mongoose.Schema({

    current:{
        type: Number,
        required: true
    },
    
    level_control:{
        type: Number,
        required: true
    },
    
    reactor_level:{
        type: Number,
        required: true
    },

    tst:{
        type: Date,
        required: true
    },

    deviceId:{
        type: Number,
        required: true
    },
   
    pumpId:{
        type: Number,
        required: true
    },

    slurry:{
        type: String,
        required: true
    }    
})
module.exports = mongoose.model('myTable',pumpSchema)
