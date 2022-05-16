const router = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const verify = require('../verifyToken');

// update
router.put('/:id', verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(req.body.password, salt);
            req.body.password = hash;
        }

        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.status(200).json({
                message: 'User updated',
                user: updatedUser
            })
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    } else {
        res.status(403).json({
            message: 'You can update only your account '
        })
    }
}
)
// delete
router.delete('/:id', verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            const DeletedUser = await User.findByIdAndDelete(req.params.id);
            res.status(200).json({
                message: 'User Deleted'
            })
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    } else {
        res.status(403).json({
            message: 'You can only Delete your account '
        })
    }
}
)
// get
router.get('/find/:id', async (req, res) => {

    try {
        const user = await User.findById(req.params.id);
        const { password, ...info } = user._doc
        res.status(200).json({
            message: 'User found',
            user: info
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})
// get ALL
router.get('/', verify, async (req, res) => {
    const query = req.query.new;
    if (req.user.isAdmin) {
        try {
            const users = query ? await User.find().sort({ _id: -1 }).limit(10) : await User.find();

            res.status(200).json({ users })
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    } else {
        res.status(403).json({
            message: 'Only admin can view all users  '
        })
    }
}
)
// get user stats
router.get("/stats", async (req, res) => {

    const today = new Date();
    const lastyear = today.setFullYear(today.setFullYear() - 1);
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'

    ];
    try {
        const data = await User.aggregate([

            {
                $project: {
                    month: { $month: "$createdAt" },
                }
            }, {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 }
                }
            }

        ])
        res.status(200).json({ data })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

})


module.exports = router;