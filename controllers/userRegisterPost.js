const bcrypt = require("bcrypt");
const User = require("../models/user");
const sendMail = require("../config/nodemailer");
const dotenv = require("dotenv").config();

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
        zipcode,
        houseNumber,
        province,
        city,
        street,
        oldPersonTrades,
        careGiverTrades,
    } = req.body;
    // Check if user already is in the database.
    User.findOne({
        email,
    }).exec(async (err, user) => {
        if (user) {
            // Veranderen in een pagina of iets?
            return res.status(400).json({
                error: "User already exist",
            });
        } else {
            const pictureUser = `uploads/${req.file.filename}`;
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
                sendMail(user);
                res.redirect("/");
            } catch (err) {
                console.log(err);
            }
        }
    });
    // Functie uit video
    // https://www.youtube.com/watch?v=CEim3tZsp1Y
    // Tijd mee bezig ongeveer 40 min
};

module.exports = register_post;