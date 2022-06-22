// Bcrypt -> password encrypted
const bcrypt = require('bcrypt');
const User = require('../models/user');
const sendMail = require('../config/nodemailer');

// ROUTES
const user_index = (req, res) => {
  res.render('pages/index');
};

const user_users = require('./userUsers');
const user_detail = require('./userDetail');
const user_register = require('./userRegister');
const user_register_zorg = require('./userRegisterZorg');

const user_likes = require('./userLikes');
const user_post = require('./userPost');

const user_activate = require('./activateAccount');
const user_profiel = require('./userProfiel');

const user_register_post = require('./userRegisterPost');

const user_login = (req, res) => {
  res.render('pages/login');
};

const user_error = (req, res) => {
  res.render('pages/error');
};

const user_logout = require('./userLogOut');

module.exports = {
  user_index,
  user_detail,
  user_users,
  user_register,
  user_register_zorg,
  user_register_post,
  user_login,
  user_error,
  user_activate,
  user_logout,
  user_profiel,
  user_likes,
  user_post,
};
