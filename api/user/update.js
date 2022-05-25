const { AppUser } = require('./../../modules/model/user')

const updateUser = async (request, response) => {
  try {
    const _id = request.params.id
    const query = request.body
    let appUser = await AppUser.findByIdAndUpdate({ _id: _id }, query, {
      new: true
    })
    if (appUser == null || appUser.length == 0) {
      response.status(404).send({
        error: 'Not found'
      })
    } else {
      response.send(appUser)
    }
  } catch (error) {
    response.status(400).send({
      error: error
    })
  }
}

module.exports = { updateUser }
