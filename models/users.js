let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({

    name: String,

    emailId: {
        type: String,
        unique: true
    },

    password: String,

    role: String

});

let users = mongoose.model("users", userSchema);

module.exports = { users };