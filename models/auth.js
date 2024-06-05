const mongoose = require("mongoose")
const authSchema = mongoose.Schema({
    password:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },

    date:{
        type: Date, 
        default: Date.now()
    }

})

module.exports = mongoose.model('auth', authSchema)