const mongoose = require('mongoose')
const Schema = mongoose.Schema


const carsSchema = new Schema (
    {
        name: { type: String, required: true},
        description: { type: String},
        img: {type: String},
        price: {type: Number, min: 0},
    }
)

const cars = mongoose.model('Car', carsSchema)
module.exports = cars