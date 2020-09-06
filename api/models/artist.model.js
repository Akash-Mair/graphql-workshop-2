const { Schema, model } = require('mongoose')

var artistSchema = new Schema({
    id: String,
    name: String,
    genre: String,
    songs: [{type: Schema.Types.ObjectId, ref: 'song'}]
})

module.exports = model('Artist', artistSchema)