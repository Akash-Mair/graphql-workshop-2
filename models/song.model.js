const { Schema, model } = require('mongoose')

const songSchema = new Schema({
    title: String,
    id: String,
    genre: String,
    artist: { type: Schema.Types.ObjectId, ref: 'artist' }
})

module.exports = model('Song', songSchema)