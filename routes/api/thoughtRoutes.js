const router = require('express').Router();

// All Thought and Reaction routes that will be used
const {
	getThoughts,
	getSingleThought,
	createThought,
	updateThought,
	deleteThought,
	addThoughtReaction,
	removeThoughtReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
// Gets (GET) all thoughts a creates (POST) a new thought
router.route('/')
	.get(getThoughts)
	.post(createThought);

// /api/thoughts/:thoughtId
// Gets (GET) one thought, updates (PUT) one thought, deletes (DELETE) one thought, all by its ID
router
	.route('/:thoughtId')
	.get(getSingleThought)
	.put(updateThought)
	.delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
// Creates (POST) a reaction on one thought via its ID
router.route('/:thoughtId/reactions')
	.post(addThoughtReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
// Deletes (DELETE) a reaction by its ID
router.route('/:thoughtId/reactions/:reactionId')
	.delete(removeThoughtReaction);

module.exports = router;
