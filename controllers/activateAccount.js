const User = require("../models/user");

const activateAcc = async (req, res) => {
    const token = req.params.token;
    const id = atob(token);

    User.findById(id).exec(async (err, user) => {
        if (user) {
            console.log(user);
            if (user.verified == "notVerified") {
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
            } else if (user.verified == "verified") {
                res.redirect("/")
            }
        } else {
            res.redirect("/")
        }
    })
};

module.exports = activateAcc;