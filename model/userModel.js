const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: [true, 'Username is required'], unique: [true, 'Username already taken']},
    favorites: {type: Array}
})

module.exports = mongoose.model('User', userSchema);