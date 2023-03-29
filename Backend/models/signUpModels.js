const mongoose = require("mongoose")

const signUpSchema = new mongoose.Schema({
    fullName: {
        type: String, 
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

// signUpSchema.pre("save", function (next) {
//     const user = this;
//     const existingUser = user.findOne({email: user.email});
//     if (existingUser) {
//         const emailError = new Error("Email already exists");
//         next(emailError);
//     } else {
//         next();
//     }
// });

module.exports = mongoose.model("Users", signUpSchema)