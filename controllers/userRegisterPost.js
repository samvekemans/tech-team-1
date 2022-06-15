const bcrypt = require("bcrypt");
const User = require("../models/user");
const sendMail = require("../config/nodemailer");

const register_post = async (req, res) => {
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
    const hashedPassword = await bcrypt.hash(password, 10);
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