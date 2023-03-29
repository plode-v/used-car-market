const mongoose = require("mongoose")
const express = require("express")
const app = express();

mongoose.connect("mongodb+srv://admin:cshOfW8aOs1y0lMl@used-car-app.katatnr.mongodb.net/test?retryWrites=true&w=majority")

const schema = new mongoose.Schema({
    fullName: String,
    age: Number
})

const user = new mongoose.model("user", schema)

const num1 = new user({
    fullName: "Mira",
    age: 24
})

// num1.save().then(() => {
//     mongoose.connection.close().then(() => {
//         console.log("Mongoose disconnected on app termination");
//     })
// })

const findUser = (name) => {
    user.find({fullName: name})
        .then(doc => console.log(doc))
}

const deleteUser = (name) => {
    user.deleteOne({fullName: name})
    .then(docs => console.log(docs), mongoose.connection.close())
}

findUser("Mira")