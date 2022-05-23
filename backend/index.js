const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");


dotenv.config();
const url = process.env.MONGO_URL;
const port = process.env.PORT;



mongoose.connect(url).then(() => {
    console.log("Connected to the database");
}).catch((err) => {
    console.log("Connection failed", err);
})


app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)
app.use("/api/movie", movieRoute)
app.use("/api/list", listRoute)



app.listen(port, () => {
    console.log("server is running on port " + port);
}
)