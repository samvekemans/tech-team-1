// Express
const express = require('express');

const router = express.Router();

// Controller -> Update datebase / Routes info
const passport = require('passport');
const useController = require('../controllers/userController');

const passportConfig = require('../config/passport-config');

const User = require('../models/user');

const { upload } = require('../config/multer');

const checkLogged = passportConfig.checkAuthenticated;
const checkNotLogged = passportConfig.checkNotAuthenticated;

passportConfig.initialize2(
  passport,
  async (email) =>
    await User.findOne({
      email,
    }),
  (id) => id
);

// Routes
router.get('/', (req, res) => {
  res.redirect('/start');
});

router.get('/start', checkNotLogged, useController.user_index);

router.get('/users/:userId', checkLogged, useController.user_detail);
router.get('/account/verify/:token', useController.user_activate);

router.get('/users', checkLogged, useController.user_users);
router.post('/users', checkLogged, useController.user_post);

router.get('/register', checkNotLogged, useController.user_register);
router.get('/register-zorg', checkNotLogged, useController.user_register_zorg);
router.post(
  '/register',
  checkNotLogged,
  upload.single('pictureUser'),
  useController.user_register_post
);

router.get('/likes', checkLogged, useController.user_likes);
router.post('/likes', checkLogged, useController.user_postdel);

router.get('/login', checkNotLogged, useController.user_login);
router.post('/login', checkNotLogged, passportConfig.login);

router.get('/error', useController.user_error);

router.delete('/logout', useController.user_logout);

router.get('/profiel', checkLogged, useController.user_profiel);

module.exports = router;
