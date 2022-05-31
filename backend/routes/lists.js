const router = require('express').Router();
const List = require('../model/list');
const verify = require('../verifyToken');

//create List  
router.post('/', verify, async (req, res) => {
    if (req.user.isAdmin) {

        const newList = new List(req.body);
        try {
            const savedList = await newList.save();
            res.status(200).json({ savedList })
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    } else {
        res.status(403).json({
            message: 'Only admin can create list'
        })
    }
}
)
//delete List 
router.delete('/:id', verify, async (req, res) => {
    if (req.user.isAdmin) {


        try {
            await List.findByIdAndDelete(req.params.id);
            res.status(200).json("List Deleted")
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    } else {
        res.status(403).json({
            message: 'Only admin can delete list'
        })
    }
}
)
//Get List 
router.get("/", verify, async (req, res) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];
    try {
        if (typeQuery) {
            if (genreQuery) {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery, genre: genreQuery } },
                ]);
            } else {
                list = await List.aggregate([
                    { $sample: { size: 10 } },
                    { $match: { type: typeQuery } },
                ]);
            }
        } else {
            list = await List.aggregate([{ $sample: { size: 10 } }]);
        }
        res.status(200).json(list);
    } catch (err) {
        res.status(500).json(err);
    }
});
//Get List 
router.get("/all", verify, async (req, res) => {
    try {
        const list = await List.find();

        res.status(200).json(list.reverse())
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
});

module.exports = router;