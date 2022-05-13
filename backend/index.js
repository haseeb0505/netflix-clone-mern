const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv");

dotenv.config();
const url = process.env.MONGO_URL;
const port = process.env.PORT;


mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to the database");
})


app.listen(port, () => {
    console.log("server is running on port " + port);
}
)