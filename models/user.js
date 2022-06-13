const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    account: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    hashedPassword: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    help: {
        type: Array,
        required: true,
    },
    pictureUser: {
        type: String,
        required: false,
    },
    zipcode: {
        type: Array,
        required: true,
    },
    houseNumber: {
        type: Number,
        required: true,
    },
    province: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    oldPersonTrades: {
        type: Array,
        required: false,
    },
    careGiverTrades: {
        type: Array,
        required: false,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;