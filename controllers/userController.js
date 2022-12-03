const { User, Thought } = require('../models');

const friendCount = async () =>
  User.aggregate()
    .count('friendCount')
    .then((numberOfFriends) => numberOfFriends);

module.exports = {
  // Get all users and their associated thoughts/friends
  // Will also return their friend count
  getUsers(req, res) {
    User.find({})
      .populate('thoughts')
      .populate('friends')
      .select('-__v')
      .sort({ _id: -1 })
      .then(async (users) => {
        const userObj = {
          users,
          friendCount: await friendCount(),
        };
        return res.json(userObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Get a single user by their ID
  // and their associated thoughts and friends
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate('thoughts')
      .populate('friends')
      .select('-__v')
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user found with that ID' })
          : res.json({
            user
          })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Update a user by their user ID 
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user found with that ID' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err)
      });
  },

  // Delete a user and remove their associated thoughts
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user found with that ID' })
          : Thought.deleteMany({
            _id: { $in: user.thoughts }
          })
      )
      .then((thought) =>
        !thought
          ? res.status(404).json({
            message: 'User deleted, but no thoughts found',
          })
          : res.json({ message: 'User and their thoughts successfully deleted' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Add a friend to a user
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
            .status(404)
            .json({ message: 'No user found with that ID' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err)
      });
  },

  // Remove a friend from a user
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { user: { userId: req.params.userId } } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res
            .status(404)
            .json({ message: 'No user found with that ID' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err)
      });
  },
};