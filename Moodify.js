const axios = require('axios'); // HTTP Requests

// List O' Bio
const stuff = [
  "💭 Ponderin'",
  "🎯 Dialled",
  "🧩 Perplexed",
  "☁️ Cloud 9",
  "😴 'eepy",
  "👨🏻‍💻 Debuggin'",
  "🌱 Learnin'"
];

// Randomly Select Bio
const randomize = Math.floor(Math.random() * stuff.length);
const thing = stuff[randomize];

// GitHub API URL TO Update User Profile (Bio)
const url = 'https://api.github.com/user';

// Send PATCH Request TO GitHub API TO Modify Bio
axios.patch(url, {
  bio: thing // Modify Bio W/ Selected "Thing"
}, {
  headers: {
    'Authorization': `token ${process.env.SHUSH}`, // GitHub Token
    'Content-Type': 'application/json'
  }
})
  .then(() => console.log('Hunky-Dory!'))
  .catch(err => console.error(`Whoopsie-Daisy: ${err.response?.status || 'Crickets...'}`));
