const User = require('../models/user');

const detail = async (req, res) => {
  const activeAcc = await User.findById(req.user).exec();
  const careTradesTitle = 'Mijn eigenschappen:';
  const oldTradesTitle = 'Wat de ouderen verwacht van jou:';
  const user = await User.findById(req.params.userId).exec();
  res.render('pages/user-detail', {
    activeAcc,
    user,
    oldTradesTitle,
    careTradesTitle,
  });
};

module.exports = detail;
