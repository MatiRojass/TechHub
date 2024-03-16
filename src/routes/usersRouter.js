const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')


router.get('/', usersController.list)
router.get('/:userId', usersController.detail)


module.exports = router