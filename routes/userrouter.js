const express = require('express')
const {usersignup,userlogin,profile} = require('../controllers/cuser.js')
const {verifytoken,access} = require('../middleware/verifytoken.js')

const router = express.Router()

router.post('/usersignup',usersignup);
router.post('/userlogin',userlogin);    
router.get('/profile',verifytoken,profile)

module.exports = router;