const User = require('../models/user');
const arrayify = require('array-back')

const userPost = async (req, res) => {
    // Constante van gebruiker en likes
    const idLoggedUser = req.user
    const idLikedUser = req.body.favorite

    // ingelogde gebruiker ophalen met findById
    const user = await User.findById(idLoggedUser);

    // check naar likeArray uit database
    const likes = user.likes

    const arrayUserLikes = arrayify(likes)
    const arrayidLikedUser = arrayify(idLikedUser)
    
    const concat = arrayUserLikes.concat(arrayidLikedUser)
    
    console.log(concat)

    // // Maak een identieke lijst -> allemaal verschillende id's
    const newSet = new Set(concat)
    // // Maak een array van de set.
    const likeWork = arrayify(newSet)

    // parameters voor mongoose
    const change = {
        likes: likeWork
    };

    console.log(likeWork)
    
    // // Functie likes aanpassen
    await User.findByIdAndUpdate(req.user, change).exec(function(){
        console.log("gelukt")
    });

    res.redirect("/")
}

module.exports = userPost




   

    // const check = likeArray.includes(idLike);
    // if(check == true){
    //     // niet toevoegen, zit er al in.
    // }

    
    
    // voeg id toe aan likeArray

    // update likeArray

    // redirect users, zonder gelikede users.




    // idLike toevoegen aan array
    // const change = {
    //     likes: "test" // array ,
    // };
    // const newUser = await User.findByIdAndUpdate(id, change);

    
    // }  else if (!user.likes) {
    // // idLike toevoegen aan nieuwe array
    // const change = {
    //     likes: `${idLike}` // array ,
    // };
    // const newUser = await User.findByIdAndUpdate(id, change);
    // }

    // user.likes // id 

    // haal de likes op 

    // voeg de like aan de array toe

    // update gebruiker likes -> array

    



    // User die de post liked -> req.user >> query
    // User die is geliked -> req.body
    // Id van liked
    // 
    // 
    