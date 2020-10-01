const mongoose = require('mongoose')
const usersSchema = new mongoose.Schema({
  id: {
    required: false,
    type: String,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
    match: /^.+@.+\..+$/,
  },
  password: {
    type: String,
    required: true,
  },
  memberSince: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
  isPremiumUser: {
    type: Boolean,
  },
  pets: {
    type: Object,
  },
  shippingAdress: {
    type: Object,
  },
  socialNetworks: {
    type: Array,
  },
  phoneNumber: {
    type: Number,
  },
  //! Restablecer password
  tokenResetPassword: String,
  expiraResetPassword: Date,
})

module.exports = mongoose.model('users', usersSchema)