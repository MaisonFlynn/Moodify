const axios = require('axios');

// List O' Statuses
const statuses = [
  "💭 Ponderin'",
  "🎯 Dialled",
  "🧩 Perplexed",
  "☁️ Cloud 9"
];

// Randomly Select Status
const randomize = Math.floor(Math.random() * statuses.length);
const status = statuses[randomize];

// GitHub API URL TO Update User Profile (Bio)
const url = 'https://api.github.com/user';

// Send PATCH Request TO GitHub API TO Update Bio
axios.patch(url, {
  bio: status // Update Bio W/ Selected Status
}, {
  headers: {
    'Authorization': `token ${process.env.SHUSH}`, // GitHub Token
    'Content-Type': 'application/json'
  }
})
  .then(() => console.log('Hunky-Dory!'))
  .catch(err => console.error(`Whoopsie-Daisy: ${err.response?.status || 'Crickets...'}`));
