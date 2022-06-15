// Express
const express = require("express");
const router = express.Router();

// Controller -> Update datebase / Routes info
const useController = require("../controllers/userController");

const passport = require("passport");
const passportConfig = require("../config/passport-config");

const User = require("../models/user");

// // Link naar Multer config.
// const {
//     storage
// } = require('./config/multer')

const checkLogged = passportConfig.checkAuthenticated;
const checkNotLogged = passportConfig.checkNotAuthenticated;

passportConfig.initialize2(
    passport,
    async (email) => await User.findOne({
            email: email
        }),
        (id) => {
            return id;
        }
);

// Routes
router.get("/", (req, res) => {
    res.redirect("/start");
});

router.get("/start", checkNotLogged, useController.user_index);

router.get("/users/:userId", checkLogged, useController.user_detail);

router.get("/users", checkLogged, useController.user_users);

router.get("/register", checkNotLogged, useController.user_register);
router.get("/register-zorg", checkNotLogged, useController.user_register_zorg);
router.post("/register", checkNotLogged, useController.user_register_post);

router.get("/login", checkNotLogged, useController.user_login);
router.post("/login", checkNotLogged, passportConfig.login);

router.get("/error", useController.user_error);

module.exports = router;