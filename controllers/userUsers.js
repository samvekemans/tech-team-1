const User = require('../models/user');

const users = async (req, res) => {
    const activeAcc = await User.findById(req.user)
    const accountType = activeAcc.account
    let oldTradesTitle = "Mijn eigeschappen:";
    if (accountType == "zorgmedewerker") {
        const title = "Zorg Gebruikers";
        const query = {
            account: "ouderen",
        };
        const users = await User.find(query);
        res.render("pages/users", {
            users,
            oldTradesTitle,
            activeAcc,
            title,
        });
    } else {
        const title = "Ouderen Gebruikers";
        const query = {
            account: "zorgmedewerker",
        };
        const users = await User.find(query);
        res.render("pages/users", {
            users,
            oldTradesTitle,
            activeAcc,
            title,
        });
    }
};

module.exports = users;
