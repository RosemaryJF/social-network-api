const user = [
  {
    "username": "Jodie_Whittaker",
    "email": "jodie_whittaker@gmail.com"
  },
  {
    "username": "Michael_Moore",
    "email": "michael_moore@gmail.com"
  },
  {
    username: 'Catherine_Zeta-Jones',
    email: 'catherine_zj@gmail.com'
  },
  {
    username: 'Jenna_Ortega',
    email: 'jenna_or_wednesday@gmail.com'
  },
  {
    username: 'Bart_Simpson',
    email: 'bart_simpson@gmail.com'
  },
  {
    username: 'Marilyn_Monroe',
    email: 'marilyn_monroe@gmail.com'
  },
  {
    username: 'Hugh_Jackman',
    email: 'hugh_jackman@gmail.com'
  },
  {
    username: 'Simon_Simmons',
    email: 'simon_simmo@gmail.com'
  },
  {
    username: 'Zach_Braff',
    email: 'zach_braff@gmail.com'
  },
  {
    username: 'Bradley_Cooper',
    email: 'bradley_cooper@gmail.com'
  },
];

const thoughtText = [
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
];

const reactions = [
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
const getRandomUser = () =>
  `${getRandomArrItem(user)}`;

// Function to generate random thoughts tha can be added to the database. Includes thought reactions.
const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thought: getRandomArrItem(thoughtText),
      reaction: [...getThoughtReactions(1)],
    });
  }
  return results;
};

// Create the reaction that will be added to each thought
const getThoughtReactions = (int) => {
  if (int === 1) {
    return getRandomArrItem(reactions);
  }
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reaction: getRandomArrItem(reactions),
      user: getRandomUser(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomUser, getRandomThoughts, getThoughtReactions };
