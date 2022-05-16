const router = require('express').Router();
const Movie = require('../model/Movie');
const jwt = require('jsonwebtoken');
const verify = require('../verifyToken');
//createmovie  
router.post('/', verify, async (req, res) => {
    if (req.user.isAdmin) {

        const createMovie = new Movie(req.body);
        try {
            const movie = await createMovie.save();
            res.status(200).json({
                message: 'Movie created successfully',
                user: movie
            })
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    } else {
        res.status(403).json({
            message: 'Only admin can create movie'
        })
    }
}
)
// update movie  
router.put('/:id', verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

            res.status(200).json({ updatedMovie })
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    } else {
        res.status(403).json({
            message: 'Only admin can update  movie'
        })
    }
}
)
// delete movie  
router.delete('/:id', verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const DeletedMovie = await Movie.findByIdAndDelete(req.params.id);

            res.status(200).json("Movie Deleted")
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    } else {
        res.status(403).json({
            message: 'Only admin can Delete  movie'
        })
    }
}
)
// get movie  
router.get('/:id', verify, async (req, res) => {

    try {
        const movie = await Movie.findById(req.params.id);

        res.status(200).json(movie)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}
)
// get random movie   
router.get('/random', verify, async (req, res) => {
    const type = req.query.type;
    let movie;
    try {
        if (type === "series") {
            movie = await Movie.aggregate([{
                $match: { isSeries: true }

            }, {
                $sample: { size: 1 }
            }])
        } else {
            movie = await Movie.aggregate([{
                $match: { isSeries: false }

            }, {
                $sample: { size: 1 }
            }])
        }


        res.status(200).json(movie)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}
)



module.exports = router;