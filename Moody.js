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

// Log selected status for debugging
console.log("Status:", status);

// GitHub API URL TO Update Status
const url = 'https://api.github.com/user/status';

// Send PATCH Request TO GitHub API
axios.patch(url, status, {
  headers: {
    'Authorization': `token ${process.env.SHUSH}`, // GitHub Token Environment Variable
    'Content-Type': 'application/json'
  }
})
  .then(response => console.log('Status updated successfully:', response.data))
  .catch(error => {
    console.error('GitHub API Error:', error.response ? error.response.data : error.message);
    console.error('Status Code:', error.response ? error.response.status : 'No response');
  });
