const User = require('../models/user');

const users = async (req, res) => {
  const activeAcc = await User.findById(req.user);
  const accountType = activeAcc.account;
  const oldTradesTitle = 'Mijn eigeschappen:';
  if (accountType == 'zorgmedewerker') {
    const query = {
      account: 'ouderen',
    };
    const users = await User.find(query);
    res.render('pages/users', {
      users,
      oldTradesTitle,
      activeAcc,
    });
  } else {
    const query = {
      account: 'zorgmedewerker',
    };
    const users = await User.find(query);
    res.render('pages/users', {
      users,
      oldTradesTitle,
      activeAcc,
    });
  }
};

module.exports = users;
