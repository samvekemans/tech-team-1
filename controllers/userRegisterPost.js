const bcrypt = require("bcrypt");
const User = require("../models/user");
const sendMail = require("../config/nodemailer");

const register_post = async (req, res) => {
    // Constante uit de req.body
    const {
        account,
        lat,
        lon,
        name,
        email,
        password,
        age,
        description,
        help,
        pictureUser,
        zipcode,
        houseNumber,
        province,
        city,
        street,
        oldPersonTrades,
        careGiverTrades,
    } = req.body;
    // Wachtwoord encrypten
    const hashedPassword = await bcrypt.hash(password, 10);
    // Functie uit video
    // https://www.youtube.com/watch?v=CEim3tZsp1Y
    // Tijd mee bezig ongeveer 40 min
    const verified = "notVerified";
    try {
        const user = await User.create({
            account,
            lat,
            lon,
            name,
            email,
            hashedPassword,
            age,
            description,
            help,
            pictureUser,
            zipcode,
            houseNumber,
            province,
            city,
            street,
            oldPersonTrades,
            careGiverTrades,
            verified,
        });
        sendMail(email);
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
};

module.exports = register_post