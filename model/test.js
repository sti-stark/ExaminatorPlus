const mongoose = require('mongoose')

const Quest = mongoose.model('Quest',{
    preg:{
        type:String,
        require:true
    }
})

module.exports=Quest