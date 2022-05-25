const { AppUser } = require('./../../modules/model/user')
const jwt = require('jsonwebtoken')
const jwt_token_key = process.env.JWT_TOKEN_KEY

const createJsonWebToken = async id => {
  const userToken = await jwt.sign({ _id: id }, jwt_token_key, {
    expiresIn: '1 day'
  })
  // console.log(userToken)
  // const verifyUser = await jwt.verify(userToken, jwt_token_key)
  // console.log(verifyUser)
  return userToken
}

createJsonWebToken()

const insertUser = async (request, response) => {
  try {
    let query = request.body
    let appUser = await AppUser(query).save()
    await response.cookie('jwt', await createJsonWebToken(appUser._id))
    response.status(201).send(appUser)
  } catch (error) {
    response.status(400).send({
      error: error
    })
  }
}

module.exports = { insertUser }
