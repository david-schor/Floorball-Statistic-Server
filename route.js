const express = require('express')
const router = express.Router()
const userController = require('./controller/userController')

router.post('/signup', userController.signup)
router.post('/update', userController.update)
router.post('/getuser', userController.getuser)

module.exports = router;
