const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const moment = require('moment');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      require: true,
      minLength: 1,
      maxLength: 280,
    },
    username: [
      {
        type: String,
        ref: 'user',
        required: true,
      }
    ],
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) =>
        moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `reactionCount` that gets the amount of reactions per thought
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialises the Thought model
const Thought = model('thought', thoughtSchema);
// Exports the Thought model
module.exports = Thought;

