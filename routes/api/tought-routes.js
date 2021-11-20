const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
} = require("../../controllers/thought-controller");

// api/thoughts/<userId>
router
    .route('/:userId')
    .get(getAllThoughts)
    .post(addThought)

// api/thoughts/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .get(getThoughtById)

module.exports = router;