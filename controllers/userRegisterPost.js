const path = require('path');

const {
  src,
  dest
} = require('gulp');
const webp = require('gulp-webp');
const createUser = require('../config/createUser');
const User = require('../models/user');

const paths = {
  uploads: {
    src: './public/uploads/*',
    dest: './public/dist/uploads',
    webp: './public/dist/uploads/webp',
  },
};

const register_post = async (req, res) => {
  // Constante uit de req.body
  function gulped() {
    return src(paths.uploads.src).pipe(webp()).pipe(dest(paths.uploads.webp));
  }
  gulped();

  const {
    email
  } = req.body;
  const addUser = req.body;

  const source = req.file.filename; // .jpg .jpeg .png

  if (source.substr(-3) == 'jpg') {
    const result = source.replace(/jpg/gi, 'webp');
    const fileName = `dist/uploads/webp/${result}`;
    createWithImage(fileName);
  } else if (source.substr(-3) == 'png') {
    const result = source.replace(/png/gi, 'webp');
    const fileName = `dist/uploads/webp/${result}`;
    createWithImage(fileName);
  } else if (source.substr(-4) == 'jpeg') {
    const result = source.replace(/jpeg/gi, 'webp');
    const fileName = `dist/uploads/webp/${result}`;
    createWithImage(fileName);
  }

  function createWithImage(filename) {
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
          if (overwrite == true) {
            createUser(addUser, filename, req);
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
        createUser(addUser, filename, req);
        res.redirect('/');
      }
    });
  }
};

module.exports = register_post;