const User = require("../models/user");

const activateAcc = async (req, res) => {
    const token = req.params.token;
    const id = atob(token);
    const oldUser = await User.findById(id)
    console.log(oldUser)
    if (oldUser.verified == "notVerified") {
        try {
            const change = {
                verified: "verified",
            };
            const newUser = await User.findByIdAndUpdate(id, change);
            console.log(newUser)
            res.render("pages/verify", {
                newUser
            });
        } catch (err) {
            console.log(err)
            res.redirect("/")
        }
    } else if (oldUser.verified == "verified") {
        res.redirect("/")
    }



};

module.exports = activateAcc;