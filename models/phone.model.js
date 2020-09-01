const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const phoneSchema = new Schema({
    _id: Number,
    name: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    images: {
        type: String,
        required: true
    },
    screen: {
        type: String,
        required: true,
    },
    processor: {
        type: String,
        required: true
    },
    ram: {
        type: Number,
        required: true
    }

})

const Phone = mongoose.model('Phone', phoneSchema)

module.exports = Phone