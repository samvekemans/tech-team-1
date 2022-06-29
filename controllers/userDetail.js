const User = require('../models/user');

const detail = async (req, res) => {
    const activeAcc = await User.findById(req.user).exec();
    const careTradesTitle = 'Mijn eigenschappen:';
    const oldTradesTitle = 'Wat de ouderen verwacht van jou:';
    
  try {
    const user = await User.findById(req.params.userId).exec();
    const title = user.name;

    res.render('pages/user-detail', {
      activeAcc,
      user,
      oldTradesTitle,
      careTradesTitle,
      title,
    });
  } catch (error) {
    res.redirect('/');
  }
};

module.exports = detail;
