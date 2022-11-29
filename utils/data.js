const usernames = [
  'Jodie_Whittaker',
  'Michael_Moore',
  'Catherine_Zeta-Jones',
  'Jenna_Ortega',
  'Bart_Simpson',
  'Marilyn_Monrow',
  'Hugh_Jack',
  'Simon_Simmons',
  'Zach_Braff',
  'Bradley_Cooper'
];

const thoughtBodies = [
  'Surf is better when there is an offshore wind.',
  'Really want it to stop raining soon!',
  'I prefer salty popcorn over sweet, sweet is not popcorn!',
  'Training the same body part 2 days in a row can hinder your muscle growth.',
  'Apparently Capaberias are super affectionate, I would like to own one I think.',
  'Do not care what people say, Christmas is the worst.',
  'Caffeine within an hour of iron intake can hinder its absorption.',
  'Hello world',
  'Why did I think joining another social networking app was a good idea?!',
  'Morning person for the win.',
  'Best summer snack is watermelon.',
];

const possibleReactions = [
  'I disagree!',
  'No way!',
  'This was awesome',
  'That is super interesting.',
  'Wow, I never knew that before.',
  'Totally agree!',
  'I prefer not to think about that.',
];

const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username
const getRandomUsername = () =>
  `${getRandomArrItem(usernames)} ${getRandomArrItem(usernames)}`;

// Function to generate random videos that we can add to the database. Includes video responses.
const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thought: getRandomArrItem(thoughtBodies),
      reaction: [...getThoughtReactions(3)],
    });
  }
  return results;
};

// Create the reactions that will be added to each thought
const getThoughtReactions = (int) => {
  if (int === 1) {
    return getRandomArrItem(possibleReactions);
  }
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(possibleReactions),
      username: getRandomUsername(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomUsername, getRandomThoughts, getThoughtReactions };
