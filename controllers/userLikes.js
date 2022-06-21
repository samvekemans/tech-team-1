const User = require("../models/user");

const userLikes = async (req, res) => {

    const activeAcc = await User.findById(req.user)
    console.log(activeAcc)

    const activeAccLikes = activeAcc.likes
    console.log(activeAccLikes)

    const filterFav = await User.find(req._id)
    console.log(filterFav)
    
    let favTitle = "Mijn favoriete"

    res.render("pages/likes", {
        activeAccLikes,
        favTitle,
    })
}


// const userLikes = async (req, res) => {
//     const activeAcc = await User.findById(req.user)
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