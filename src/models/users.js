const mongoose = require('mongoose')
const usersSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
    match: /^.+@.+\..+$/,
  },
  phoneNumber: {
    type: Number,
  },
  country: {
    type: String,
    required: true,
  },
  message: {
    type: Date,
  },
  createdAt: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model('users', usersSchema)