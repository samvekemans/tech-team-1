// Bcrypt -> password encrypted
const bcrypt = require("bcrypt");
const User = require("../models/user");

// ROUTES
const user_index = (req, res) => {
    res.render("pages/index");
};

const user_detail = async (req, res) => {
    let careTradesTitle = "Mijn eigenschappen:";
    let oldTradesTitle = "Wat de ouderen verwacht van jou:";
    const user = await User.findById(req.params.userId).exec();
    res.render("pages/detail", {
        user,
        oldTradesTitle,
        careTradesTitle
    });
};

const user_users = async (req, res) => {
    const users = await User.find({});
    let oldTradesTitle = "Mijn eigenschappen:";

    res.render("pages/users", {
        users,
        oldTradesTitle,
    });
};

const user_register = (req, res) => {
    const iconTitles = {
        first: "Welke eigenschappen verwacht je van de zorgmedewerker?",
        second: "Welke eigenschappen passen het beste bij jou?",
    };
    const valueType = "ouderen";
    const radioTitle = "Waar zoekt u naar?";
    const trades = {
        first: "oldPersonTrades[]",
        second: "careGiverTrades[]",
    };

    res.render("pages/register", {
        radioTitle,
        valueType,
        trades,
        iconTitles,
    });
};

const user_register_zorg = (req, res) => {
    const iconTitles = {
        first: "Welke eigenschappen passen het beste bij jou?",
        second: "Welke eigenschappen verwacht je van de oudere persoon?",
    };
    const valueType = "zorgmedewerker";
    const radioTitle = "Wat wil je doen?";
    const trades = {
        first: "careGiverTrades[]",
        second: "oldPersonTrades[]",
    };

    res.render("pages/register", {
        radioTitle,
        valueType,
        trades,
        iconTitles,
    });
};

const user_register_post = async (req, res) => {
    const {
        account,
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
    console.log(hashedPassword);
    try {
        const user = await User.create({
            account,
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
        });
        console.log(user);
        return res.json(user);
    } catch (err) {
        console.log(err);
    }
    res.redirect("/login");
};

const user_login = (req, res) => {
    res.render("pages/login");
};

const user_error = (req, res) => {
    res.render("pages/error");
};

module.exports = {
    user_index,
    user_detail,
    user_users,
    user_register,
    user_register_zorg,
    user_register_post,
    user_login,
    user_error,
};