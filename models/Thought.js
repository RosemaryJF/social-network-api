const { Schema, model } = require('mongoose');
const moment = require('moment')
const reactionSchema = require('./Reaction');
const { dateFormatter } = require('../utils/dateFormatter');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      require: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) =>
        dateFormatter(timestamp)
    },
    username: [
      {
        type: String,
        ref: 'user',
        required: true,
      }
    ],
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

