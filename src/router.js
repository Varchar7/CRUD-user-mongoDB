const { Router } = require('express')
const { insertUser } = require('./../api/user/post')
const { updateUser } = require('./../api/user/update')
const { deleteUser } = require('./../api/user/delete')
const { getAppUserDetails, getAppUsersDetails } = require('./../api/user/get')

const router = new Router()

router.get('/api/user/:id', getAppUserDetails)
router.get('/api/users', getAppUsersDetails)
router.post('/api/user', insertUser)
router.patch('/api/user/:id', updateUser)
router.delete('/api/user/:id', deleteUser)

module.exports = router
