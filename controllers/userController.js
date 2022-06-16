// Bcrypt -> password encrypted
const bcrypt = require("bcrypt");
const User = require("../models/user");
const sendMail = require("../config/nodemailer");

// ROUTES
const user_index = (req, res) => {
    res.render("pages/index");
};

const user_users = async (req, res) => {
    const query = {
        accountType: "ouderen",
    };
    const users = await User.find(query);
    let oldTradesTitle = "Mijn eigenschappen:";

    res.render("pages/users", {
        users,
        oldTradesTitle,
    });
};

const user_detail = async (req, res) => {
    let careTradesTitle = "Mijn eigenschappen:";
    let oldTradesTitle = "Wat de ouderen verwacht van jou:";
    const user = await User.findById(req.params.userId).exec();
    res.render("pages/user-detail", {
        user,
        oldTradesTitle,
        careTradesTitle,
    });
};

const user_register = require('./userRegister')
const user_activate = require('./activateAccount')
const user_profiel = require('./userProfiel')
// const user_register = (req, res) => {
//     const iconTitles = {
//         first: "Welke eigenschappen verwacht je van de zorgmedewerker?",
//         second: "Welke eigenschappen passen het beste bij jou?",
//     };
//     const valueType = "ouderen";
//     const radioTitle = "Waar zoekt u naar?";
//     const trades = {
//         first: "oldPersonTrades[]",
//         second: "careGiverTrades[]",
//     };

//     res.render("pages/register", {
//         radioTitle,
//         valueType,
//         trades,
//         iconTitles,
//     });
// };

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

const user_register_post = require('./userRegisterPost')

// const user_register_post = async (req, res) => {
// 	const {
// 		account,
// 		lat,
// 		lon,
// 		name,
// 		email,
// 		password,
// 		age,
// 		description,
// 		help,
// 		pictureUser,
// 		zipcode,
// 		houseNumber,
// 		province,
// 		city,
// 		street,
// 		oldPersonTrades,
// 		careGiverTrades,
// 	} = req.body;
// 	const hashedPassword = await bcrypt.hash(password, 10);
// 	const verified = "notVerified";
// 	try {
// 		const user = await User.create({
// 			account,
// 			lat,
// 			lon,
// 			name,
// 			email,
// 			hashedPassword,
// 			age,
// 			description,
// 			help,
// 			pictureUser,
// 			zipcode,
// 			houseNumber,
// 			province,
// 			city,
// 			street,
// 			oldPersonTrades,
// 			careGiverTrades,
// 			verified,
// 		});
// 		sendMail(email);
// 		res.redirect("/");
// 	} catch (err) {
// 		console.log(err);
// 	}
// };

const user_login = (req, res) => {
    res.render("pages/login");
};

const user_error = (req, res) => {
    res.render("pages/error");
};

const user_logout = require('./userLogOut')

module.exports = {
    user_index,
    user_detail,
    user_users,
    user_register,
    user_register_zorg,
    user_register_post,
    user_login,
    user_error,
    user_activate,
    user_logout,
    user_profiel
};