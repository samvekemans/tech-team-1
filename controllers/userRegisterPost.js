const User = require('../models/user');
const createUser = require('../config/createUser');

const register_post = async (req, res) => {
  // Constante uit de req.body
  const { email } = req.body;
  const addUser = req.body;
  const pictureUser = req.file ? `uploads/${req.file.filename}` : null;

  // Check if user exist
  User.findOne({
    email,
  }).exec(async (err, user) => {
    if (user) {
      if (user.verified == 'verified') {
        // Veranderen in een foutmelding op de pagina!!
        return res.status(400).json({
          error: 'User already exist',
        });
      }
      if (user.verified == 'notVerified') {
        // Check overwrite
        const oneWeek = 604800000;
        const dateNow = Date.now();
        const userCreatedAt = user.createdAt;
        const workDate = dateNow - oneWeek;
        const overwrite = !(workDate < userCreatedAt);
        console.log(overwrite);
        if (overwrite == true) {
          createUser(addUser, pictureUser);
          res.redirect('/');
        } else if (overwrite == false) {
          // Veranderen in een foutmelding op de pagina!!
          return res.status(400).json({
            error: 'User already exist',
          });
        }
      }
    } else {
      // Just create a user!
      createUser(addUser, pictureUser);
      res.redirect('/');
    }
  });
};

module.exports = register_post;
