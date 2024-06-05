const mongoose = require('mongoose');
const regSchema = mongoose.Schema({

    name: {
        type: String , 
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    phone_number:{
        type: Number,
        required: true
    },

    university: {
        type: String,
        required: true
    },
    
    date:{
        type: Date, 
        default: Date.now()
    }

})

module.exports = mongoose.model('reg', regSchema);

