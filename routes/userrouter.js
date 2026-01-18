const express = require('express')
const usersignup = require('../controllers/cuser.js')

const router = express.Router()

router.post('/usersignup',usersignup);

module.exports = router;