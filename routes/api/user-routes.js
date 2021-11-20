const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
} = require("../../controllers/user-controller")

//Set up get and post routes at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

//Set up get one, put and delete at /api/users/id
router
    .route('/:id')
    .get(getUserById);

module.exports = router;