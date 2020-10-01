const mongoose = require('mongoose')
const entriesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
  },
  content: {
    type: String,
    required: true,
  },
  imageurl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
  },
  author: {
    type: String,
    required: true,
  },
  authorImage: {
    type: String,
    required: true,
  },
  authorDescription: {
    type: String,
    required: true,
  },
  authorPhrase: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('entries', entriesSchema)
