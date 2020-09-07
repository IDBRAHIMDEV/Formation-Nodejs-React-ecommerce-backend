const express = require('express');
const { salam, signup, signin, signout } = require('../controllers/authController')
const { userSignUpValidator } = require('../middlewares/userValidator')
const { requireSignIn } = require('../middlewares/auth');
const router = express.Router();

router.get('/', salam);

router.post('/signup', userSignUpValidator, signup)
router.post('/signin', signin)
router.get('/signout', signout)

router.get("/hello", requireSignIn, (req, res) => {
    res.send('hello there');
})

module.exports = router;