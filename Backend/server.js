const express = require("express")
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const routesUrls = require("./routes/routes");
const cors = require("cors");

mongoose.connect(process.env.MONGOOSE_URI)
    .then(() => console.log("Connected to the MongoDB."))
    .catch((err) => console.error(err));

app.use(express.json());
app.use(cors());
app.use("/api", routesUrls);
app.listen(4000, () => console.log("Server is up and running."));