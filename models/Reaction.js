const { Schema, Types } = require('mongoose');
const moment = require('moment')

// Schema to create Reaction model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reaction: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 280,
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
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Exports the reaction schema to be used in the Thought model
module.exports = reactionSchema;
