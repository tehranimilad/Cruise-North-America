const mongoose = require('mongoose')
const Schema = mongoose.Schema


const locationsSchema = new Schema (
    {
        road: { type: String, required: true},
        location: { type: String},
        difficulty: { type: String},
        visited: { type: Boolean, required: true },
        img: {type: String},
    }
)

const Locations = mongoose.model('Location', locationsSchema)
module.exports = Locations