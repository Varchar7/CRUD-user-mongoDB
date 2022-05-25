const mongoose = require('mongoose')
const validator = require('validator')
const userDB = mongoose.Schema({
  username: {
    type: String,
    lowercase: true,
    required: true,
    trim: true,
    unique: true
  },
  name: String,
  email: {
    type: String,
    unique: true,
    required: true,
    validate: email => {
      if (!validator.isEmail(email)) {
        throw Error('email is not valid')
      }
    }
  },
  date: {
    type: Date,
    default: Date.now()
  },
  password: {
    type: String,

    required: true,
    validate: password => {
      if (password.length < 8) {
        throw Error('Password Length must be 8 DIGIT')
      }
    }
  }
})

const AppUser = mongoose.model('userDB', userDB)

module.exports = { AppUser }
