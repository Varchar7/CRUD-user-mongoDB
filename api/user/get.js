//628a5bff025897c7735c107c
const { AppUser } = require('./../../modules/model/user')
const jwt = require('jsonwebtoken')
const jwt_token_key = process.env.JWT_TOKEN_KEY

const verifyJsonWebToken = async cookie => {
  try {
    const verifyUser = await jwt.verify(cookie, jwt_token_key)
    return verifyUser
  } catch (error) {
    throw Error(error)
  }
}

const getAppUserDetails = async (request, response) => {
  try {
    let _id = request.params.id
    let userDetails = await AppUser.find({ _id: _id })
    if (userDetails == null || userDetails.length == 0) {
      response.status(404).send({
        error: 'Not found'
      })
    } else {
      const verification = await verifyJsonWebToken(cookie.jwt)
      response.status(200).send(userDetails)

      // cookie
      /* 
      const cookie = await request.cookies
      if (cookie.jwt != undefined) {
        const verification = await verifyJsonWebToken(cookie.jwt)
        response.status(200).send(userDetails)
      } else {
        response.send({
          error: 'Cookie not found'
        })
      } 
      */
    }
  } catch (error) {
    response.status(400).send(error)
  }
}

const getAppUsersDetails = async (request, response) => {
  try {
    let userDetails = await AppUser.find({}).select({
      username: 1,
      name: 1,
      _id: 0
    })
    response.status(200).send(userDetails)
  } catch (error) {
    response.status(400).send(error)
  }
}

module.exports = { getAppUserDetails, getAppUsersDetails }
