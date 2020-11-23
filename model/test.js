const mongoose = require('mongoose')

/* const test = {
    question: 'la pregunta',
    answer1: 'hola',
    answer2: 'buenos días',
    answer3: 'eiiiii',
    answer4: 'qué bueno verte'
} */

const Test = mongoose.model('Test', {
    question: {
        type: String,
        required: true,
        trim: true
    },
    answer1: {
        type: String,
        required: true,
        trim: true
    },
    answer2: {
        type: String,
        required: true,
        trim: true
    },
    answer3: {
        type: String,
        required: true,
        trim: true
    },
    answer4: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = Test