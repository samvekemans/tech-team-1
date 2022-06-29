const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const passport = require('passport');

function initialize2(passport, getEmail, GetId) {
  const authenticateUser2 = async (email, password, done) => {
    const user = await getEmail(email);
    if (user == null) {
      return done(null, false, {
        message: 'Geen gebruikers gevonden',
      });
    }
    try {
      if (await bcrypt.compare(password, user.hashedPassword)) {
        if (user.verified == 'notVerified') {
          return done(null, false, {
            message: 'Kijk in je mailbox, en verifieer de gebruiker',
          });
        }
        if (user.verified == 'verified') {
          return done(null, user);
        }
      } else {
        return done(null, false, {
          message: 'Fout wachtwoord',
        });
      }
    } catch (e) {
      return done(e);
    }
  };

  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
      },
      authenticateUser2
    )
  );
  passport.serializeUser((user, done) => {
    done(null, user._id.toString());
  });
  passport.deserializeUser((id, done) => done(null, GetId(id)));
}

const login = passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  session: true,
  failureFlash: true,
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/login');
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/users');
  }
  next();
}

module.exports = {
  initialize2,
  login,
  checkAuthenticated,
  checkNotAuthenticated,
};
