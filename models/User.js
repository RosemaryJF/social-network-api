const { Schema, model } = require('mongoose');

var validateEmail = function (email) {
  var re = /^.+@(?:[\w-]+\.)+\w+$/;
  return re.test(email)
};

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      max_length: 50
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      validate: [validateEmail, 'Please give a valid email address'],
      match: [/^.+@(?:[\w-]+\.)+\w+$/, 'Please give a valid email address']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      }
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);




// Creates a virtual property `friendCount` that gets and aggregate the user's friend count.
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    User.aggregate()
      .count('friendCount')
      .then((numberOfFriends) => numberOfFriends);
  })

// Initialises the User model
const User = model('user', userSchema);

module.exports = User;

