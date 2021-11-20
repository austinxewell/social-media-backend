const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought
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
    .put(updateThought)
    .delete(deleteThought)

module.exports = router;