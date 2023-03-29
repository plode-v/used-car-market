const express = require("express");
const User = require("../models/signUpModels");
const router = express.Router();
const bcrypt = require("bcrypt");


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
    const email = req.body.email
    const password = bcrypt.hashSync(req.body.password, 10)

    const user = User.find({ email: email, password: password });
    if (!user) {
        return res.status(401).json({message: "Invalid email or password"});
    }
})

module.exports = router;