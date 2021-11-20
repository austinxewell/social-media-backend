const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    deleteThought,
    addReaction
} = require("../../controllers/thought-controller");

// api/thoughts
router
    .route('/')
    .get(getAllThoughts)

// api/thoughts/<userId>
router
    .route('/:userId')
    .post(addThought)

// api/thoughts/<userId>/<thoughtId>
router
    .route('/:userId/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

// api/thought/<thoughtId>/reactions
router
    .route('/:thoughtId/reactions')
    .put(addReaction)

module.exports = router;