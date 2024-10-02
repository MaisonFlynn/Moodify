const axios = require('axios');

// New bio message
const newBio = "Updating my bio via GitHub API.";

// GitHub API URL to update user profile
const url = 'https://api.github.com/user';

// Send PATCH request to GitHub API to update bio
axios.patch(url, {
  bio: newBio // Update the bio field
}, {
  headers: {
    'Authorization': `token ${process.env.SHUSH}`, // GitHub Token
    'Content-Type': 'application/json'
  }
})
  .then(response => console.log('Profile updated successfully:', response.data))
  .catch(error => {
    console.error('GitHub API Error:', error.response ? error.response.data : error.message);
    console.error('Status Code:', error.response ? error.response.status : 'No response');
  });
