const arrayify = require('array-back');
const User = require('../models/user');

const userPost = async (req, res) => {
  const { method } = req.body;
  const idLoggedUser = req.user;
  const idLikedUser = req.body.favorite;

  // ingelogde gebruiker ophalen met findById
  const user = await User.findById(idLoggedUser);

  // check naar likeArray uit database
  const { likes } = user;

  const arrayUserLikes = arrayify(likes);
  const arrayidLikedUser = arrayify(idLikedUser);

  const concat = arrayUserLikes.concat(arrayidLikedUser);

  // Maak een identieke lijst -> allemaal verschillende id's
  const newSet = new Set(concat);
  // Maak een array van de set.
  const likeWork = arrayify(newSet);

  // parameters voor mongoose
  const change = {
    likes: likeWork,
  };

  // Functie likes aanpassen
  await User.findByIdAndUpdate(req.user, change).exec(() => {});

  const url = req.headers.referer;
  res.redirect(`${url}`);
};

module.exports = userPost;
