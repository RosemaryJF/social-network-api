const router = require('express').Router();

// All User and Friend routes
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users
// Gets (GET) all users, and creates (POST) a new user
router.route('/')
  .get(getUsers)
  .post(createUser);

// /api/users/:userId
// Gets (GET), updates (PUT) and deletes (DELETE) a single user, all by their ID
router.route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// /api/users/:userId/friends/:friendId
// Creates (POST) a friend for an existing user and deletes (DELETE) a friend
router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;
