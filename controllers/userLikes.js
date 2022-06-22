const User = require("../models/user");

const userLikes = async (req, res) => {
    const activeUser = await User.findById(req.user)
    const likes = activeUser.likes
    const gebruikers = []
    let oldTradesTitle = "Mijn eigeschappen:";
    console.log(likes)

    if (likes == "undefined"){
        res.send("geen likes beschikbaar")
        // Callback functie
        // Render "je hebt nog geen likes" op de pagina
    } else {
        // Mensen ophalen uit likes
        likes.forEach(like => {
            gebruikers.push(likedUsers(like))
            // console.log(gebruikers)
        })

        async function likedUsers(id){
            const likedUser = await User.findById(id)
            return likedUser
        }

        Promise.all(gebruikers).then((data)=>{
            const users = data;
            res.render("pages/userstest", {
                users,
                oldTradesTitle,
            });
        })      
        // Render mensen
    }


    
    // console.log(activeAcc)

    // const activeAccLikes = activeAcc.likes
    // // console.log(activeAccLikes)

    // // const filterFav = await User.find()
    // // console.log(filterFav)

    // // if (activeAcc.likes == filterFav) {
    // //     console.log("User al toegevoegd")
    // // } else {
    // //     console.log("User toegevoegd")
    // // }
    
    // let favTitle = "Mijn favoriete"

    // res.render("pages/likes", {
    //     activeAccLikes,
    //     favTitle,
    // })
}


// const userLikes = async (req, res) => {
//     
//     const activeAccLikes = activeAcc.likes

//     if (activeAccLikes != "undefined") {
//         console.log(activeAccLikes)
//         res.render("pages/likes")
//     } else {
//         console.log("Nog geen favoriete")
//     }
// }
//

// const userLikes = async (req, res) => {
//     const activeAcc = await User.findById(req.user)
//     const accountType = activeAcc.account
//     let oldTradesTitle = "Mijn eigeschappen:";
//     if (accountType == "zorgmedewerker") {
//         const query = {
//             account: "ouderen",
//         };
//         const users = await User.find(query);
//         res.render("pages/likes", {
//             users,
//             oldTradesTitle,
//         });
//     } else {
//         const query = {
//             account: "zorgmedewerker",
//         };
//         const users = await User.find(query);
//         res.render("pages/likes", {
//             users,
//             oldTradesTitle,
//         });
//     }
// };

// };

module.exports = userLikes