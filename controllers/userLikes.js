const User = require('../models/user');

const userLikes = async (req, res) => {
  const activeAcc = await User.findById(req.user);
  const { likes } = activeAcc;
  const gebruikers = [];
  const oldTradesTitle = 'Mijn eigeschappen:';
  const noUsers = 'Er zijn geen gebruikers geliked.';

  if (likes.length == 0) {
    likes.forEach((like) => {
      gebruikers.push(likedUsers(like));
    });

    async function likedUsers(id) {
      const likedUser = await User.findById(id);
      return likedUser;
    }

    Promise.all(gebruikers).then((data) => {
      const users = data;
      res.render('pages/likes', {
        users,
        noUsers,
        activeAcc,
      });
    });
    // Callback functie
    // Render "je hebt nog geen likes" op de pagina
  } else {
    // Mensen ophalen uit likes
    likes.forEach((like) => {
      gebruikers.push(likedUsers(like));
    });

    async function likedUsers(id) {
      const likedUser = await User.findById(id);
      return likedUser;
    }

    Promise.all(gebruikers).then((data) => {
      const noUsers = '';
      const users = data;
      res.render('pages/likes', {
        users,
        oldTradesTitle,
        noUsers,
        activeAcc,
      });
    });
    // Render mensen
  }
};
module.exports = userLikes;
