const express = require('express')
const { initMangoDB } = require('./../modules/mongoose')
const router = require('./router')
const cookieParser = require('cookie-parser')

require('dotenv').config()

const port = process.env.APP_PORT
const app = express()

const listenApp = () => {
  initMangoDB()
  console.log(`Your server Listened on ${port}`)
}

app.use(express.json())
app.use(cookieParser())
app.use(router)
app.listen(port, listenApp)
