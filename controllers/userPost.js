const User = require('../models/user');
const arrayify = require('array-back')

const userPost = async (req, res) => {
    // Constante van gebruiker en likes
    const idLoggedUser = req.user
    const idLikedUser = req.body.favorite

    // ingelogde gebruiker ophalen met findById
    const user = await User.findById(idLoggedUser);
    // // Als de gebruiker likes heeft if uitvoeren
    if (user.likes) {

    // check naar likeArray uit database
    const likes = user.likes
    // Log deze array
    console.log("Likes Array:" + " " + likes)
    console.log(idLikedUser)

    const arrayUserLikes = arrayify(likes)
    const arrayidLikedUser = arrayify(idLikedUser)
    
    const concat = arrayUserLikes.concat(arrayidLikedUser)
    
    console.log(concat)
    // maak een werkbare array van de likes
    // const likeArray = arrayify(likes)
    // log nieuwe array
    // console.log("Arrayified:" + " " + likeArray)

    // voeg id toe aan likeLijst
    // const concatted = likeArray.concat(idLikedUser);
    // log concatted
    // console.log("Combined IDs:" + " " + concatted)

    // const concattedArray = arrayify(concatted)
    // console.log("Concatted:" + " " + concattedArray)

    // // Maak een identieke lijst -> allemaal verschillende id's
    // const newSet = new Set(concatted)

    // // Maak een array van de set.
    // const likeWork = arrayify(newSet)
    
    // Log de nieuwe set
    // console.log("Updated Like List:" + " " + likeWork)

    // parameters voor mongoose
    const change = {
        likes: concat
    };

    console.log("End of Syntax:" + " " + concat)
    // // Functie likes aanpassen
    await User.findByIdAndUpdate(idLoggedUser, change);

    // Einde functie -> redirect
    // console.log("gefixt")
    res.redirect("/")
    // If no likes do this.
    } else {
        // Einde functie -> redirect
        // console.log("foutje hallo")
        res.redirect("/")
    }
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
    