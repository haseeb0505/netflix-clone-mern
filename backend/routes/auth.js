const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../model/User');
const jwt = require('jsonwebtoken');

// Resgister a new user
router.post("/register", async (req, res) => {

    const myPlaintextPassword = req.body.password;
    const hashPass = bcrypt.hashSync(myPlaintextPassword, 10);
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashPass
    }
    )
    try {

        const user = await newUser.save()
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send(error)

    }
})
// login a user
router.post("/login", async (req, res) => {

    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            return res.status(404).send("User not found")
        }
        const validPass = bcrypt.compareSync(req.body.password, user.password)
        if (!validPass) {
            return res.status(400).send("Invalid password")
        }
        const accesstoken = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.SECRET_KEY, { expiresIn: "5d" })
        const { password, ...info } = user._doc
        res.status(200).send({ ...info, accesstoken })


    } catch (error) {
        res.status(400).send(error)
    }


})

module.exports = router;