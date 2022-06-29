const User = require('../models/user');

const userPostDel = async (req, res) => {
  // Ophalen ID van unfav user
  // Ophalen USER
  // ID van unfav user weghalen van USER db

  const idLogInUser = req.user;
  const idUnfavUser = req.body.remove;

  await User.updateOne(
    {
      _id: idLogInUser,
    },
    {
      $pull: {
        likes: idUnfavUser,
      },
    }
  );
  const url = req.headers.referer;
  res.redirect(`${url}`);
};

module.exports = userPostDel;
