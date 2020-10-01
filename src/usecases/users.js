const Users = require('../models/users')

function getAll() {
  return Users.find()
}

function getById(userId) {
  return Users.findById(userId)
}

function create(userData) {
  return Users.create(userData)
}

function remove(userId) {
  return Users.findByIdAndDelete(userId)
}

function update(userID, newUserData) {
  return Users.findByIdAndUpdate(userID, newUserData)
}

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update
}
