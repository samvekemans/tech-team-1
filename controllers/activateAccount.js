const User = require('../models/user');
const title = "Verify Account";

const activateAcc = async (req, res) => {
  const {
    token
  } = req.params;
  const id = atob(token);

  User.findById(id).exec(async (err, user) => {
    if (user) {
      console.log(user);
      if (user.verified == 'notVerified') {
        try {
          const change = {
            verified: 'verified',
          };
          const newUser = await User.findByIdAndUpdate(id, change);
          console.log(newUser);
          res.render('pages/verify', {
            newUser,
            title,
          });
        } catch (err) {
          console.log(err);
          res.redirect('/');
        }
      } else if (user.verified == 'verified') {
        res.redirect('/');
      }
    } else {
      res.redirect('/');
    }
  });
};

module.exports = activateAcc;