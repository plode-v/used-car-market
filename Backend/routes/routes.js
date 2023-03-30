const express = require("express");
const User = require("../models/signUpModels");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


router.post("/signup", async (req, res) => {
    
    const securePassword = await bcrypt.hash(req.body.password, 10)

    const signedUpUser = new User({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        password: securePassword
    })
    signedUpUser.save()
    .then(data => {
        res.json(data);
    })
    // .catch (error => {
    //     if (error.email === "MongoError" && error.code === 11000) {
    //         res.status(400).json({error: "Email already exists"});
    //     } else {
    //         res.status(400).json({error: error.message})
    //     }
    // });
    .catch(error => {
        console.log({error: error.message});
    })
});

router.post("/login", (req, res) => {
    User.findOne({ username: req.body.username })
    .then(user => {
        bcrypt.compare(req.body.password, user.password)
        .then((checkPassword) => {
            if (!checkPassword) {
                return res.status(400).send({message: "Password does not match"})
            }
            const token = jwt.sign(
                {
                    userId: user._id,
                    userUsername: user.username
                },
                    "RANDOM-TOKEN",
                    { expiresIn: "24h" }
            );
            res.status(200).send({
                message: "Login successful",
                username: user.username,
                token
            })
        })
        .catch(err => {
            res.status(400).send({
                message: "Passwords does not match", err
            })
        })
    })
    .catch( err => {
        res.status(404).send({message: "Username not found", err})
    })
})

module.exports = router;