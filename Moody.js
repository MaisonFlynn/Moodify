const axios = require('axios');

// List O' Statuses
const statuses = [
  { message: "Ponderin'", emoji: "💭" },
  { message: "Dialled", emoji: "🎯" },
  { message: "Perplexed", emoji: "🧩" },
  { message: "Cloud 9", emoji: "☁️" }
];

// Randomly Select Status
const randomizer = Math.floor(Math.random() * statuses.length);
const status = statuses[randomizer];

// Debug
console.log("Status:", status)

// GitHub API URL TO Update Status
const url = 'https://api.github.com/user/status';

// Send PATCH Request TO GitHub API
axios.patch(url, status, {
  headers: {
    'Authorization': `token ${process.env.SHUSH}`, // GitHub Token Environment Variable
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    console.log('Hunky-Dory:', response.data);
  })
  .catch(error => {
    if (error.response) {
      console.error('GitHub API:', error.response.data);
      console.error('Status Code:', error.response.status);
    } else if (error.request) {
      console.error('NO Response Received:', error.request);
    } else {
      console.error('Error Setting UP Request:', error.message);
    }
  });
