const User = require('../models/user');

const detail = async (req, res) => {
  const careTradesTitle = 'Mijn eigenschappen:';
  const oldTradesTitle = 'Wat de ouderen verwacht van jou:';
  const user = await User.findById(req.params.userId).exec();
  res.render('pages/user-detail', {
    user,
    oldTradesTitle,
    careTradesTitle,
  });
};

module.exports = detail;
