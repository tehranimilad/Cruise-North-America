const mongoose = require('mongoose')
const Schema = mongoose.Schema


const locationsSchema = new Schema (
    {
        road: { type: String, required: true},
        location: { type: String},
        description: {type: String},
        difficulty: { type: String},
        visited: { type: Boolean, required: true },
        img: {type: String},
    }
)

const locations = mongoose.model('Location', locationsSchema)
module.exports = locations