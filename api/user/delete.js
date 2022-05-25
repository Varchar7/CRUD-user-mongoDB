const { AppUser } = require('./../../modules/model/user')

const deleteUser = async (request, response) => {
  try {
    const _id = request.params.id
    const deleteResult = await AppUser.findByIdAndDelete({ _id: _id })
    if (deleteResult == null || deleteResult.length == 0) {
      response.status(404).send({
        error: 'Not found'
      })
    } else {
      response.send(deleteResult)
    }
  } catch (error) {
    response.status(400).send({
      error: error
    })
  }
}

module.exports = { deleteUser }
