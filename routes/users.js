const express = require('express');
const { getOneUser, updateOneUser } = require('../controllers/userController')
const { userById } = require('../middlewares/user');
const { requireSignIn, isAuth, isAdmin } = require('../middlewares/auth')

const router = express.Router();

router.get('/:userId', requireSignIn, isAuth, getOneUser)

router.put('/:userId', requireSignIn, isAuth, updateOneUser)

router.param('userId', userById)


module.exports = router;