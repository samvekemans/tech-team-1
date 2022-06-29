const User = require('../models/user');
const title = "Profiel";

const profiel = async (req, res) => {
  const careTradesTitle = 'Mijn eigenschappen:';
  const oldTradesTitle = 'Wat de ouderen verwacht van jou:';
  console.log(req.user);
  const user = await User.findById(req.user);
  console.log(user);
  res.render('pages/profiel', {
    user,
    careTradesTitle,
    oldTradesTitle,
    title,
  });
};

module.exports = profiel;