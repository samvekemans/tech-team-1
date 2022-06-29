const User = require('../models/user');
const title = "Profiel";

const profiel = async (req, res) => {
  const careTradesTitle = 'Mijn eigenschappen:';
  const oldTradesTitle = 'Wat de ouderen verwacht van jou:';
  const user = await User.findById(req.user);
  res.render('pages/profiel', {
    user,
    careTradesTitle,
    oldTradesTitle,
    title,
  });
};

module.exports = profiel;