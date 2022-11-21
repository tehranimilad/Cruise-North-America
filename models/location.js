const mongoose = require('mongoose')
const Schema = mongoose.Schema


const locationsSchema = new Schema (
    {
        road: { type: String, required: true},
        creator: { type: String},
        location: { type: String},
        description: {type: String},
        difficulty: { type: String},
        visited: {type: String},
        img: {type: String},
    }
)

const locations = mongoose.model('Location', locationsSchema)
module.exports = locations