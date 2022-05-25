const mongoose = require('mongoose')
const { AppUser } = require('./model/user')

require('dotenv').config()

const url = `mongodb://127.0.0.1:${process.env.MONGO_PORT}/userAuthDatabase`
const initMangoDB = async () => {
  await mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Database Connection enstablished')
    })
    .catch(error => {
      console.log(error)
    })
  AppUser({})
}

module.exports = { initMangoDB }
