const User = require('../models/user');

const user = async (req, res) => {
  const query = {
    accountType: 'ouderen',
  };
  const users = await User.find(query);
  const oldTradesTitle = 'Mijn eigenschappen:';

  res.render('pages/users', {
    users,
    oldTradesTitle,
  });
};

module.exports = user;
