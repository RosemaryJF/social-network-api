const names = [
  'Jodie',
  'Whittaker',
  'Michael',
  'Moore',
  'Catherine',
  'Zeta-Jones',
  'Jenna',
  'Ortega',
  'Bart',
  'Simpson',
  'Marilyn',
  'Monrow',
  'Manson',
  'Hugh',
  'Jack',
  'Simon',
  'Simmons',
  'Zach',
  'Braff',
  'Bradley',
  'Cooper'
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

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate random videos that we can add to the database. Includes video responses.
const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      published: Math.random() < 0.5,
      thought: getRandomArrItem(thoughtBodies),
      advertiserFriendly: Math.random() < 0.5,
      responses: [...getThoughtResponses(3)],
    });
  }
  return results;
};

// Create the responses that will be added to each video
const getThoughtReactions = (int) => {
  if (int === 1) {
    return getRandomArrItem(possibleReactions);
  }
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(possibleReactions),
      username: getRandomName(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThoughts, getThoughtReactions };
