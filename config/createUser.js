const bcrypt = require('bcrypt');
const User = require('../models/user');
const sendMail = require('./nodemailer');

async function createUser(user, pictureUser) {
  const {
    account,
    lat,
    lon,
    name,
    email,
    password,
    age,
    description,
    help,
    zipcode,
    houseNumber,
    province,
    city,
    street,
    oldPersonTrades,
    careGiverTrades,
  } = user;

  const createdAt = Date.now();
  const verified = 'notVerified';
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({
      account,
      lat,
      lon,
      name,
      email,
      hashedPassword,
      age,
      description,
      help,
      pictureUser,
      zipcode,
      houseNumber,
      province,
      city,
      street,
      oldPersonTrades,
      careGiverTrades,
      createdAt,
      verified,
    });
    sendMail(user);
  } catch (err) {
    console.log(err);
  }
}

module.exports = createUser;
