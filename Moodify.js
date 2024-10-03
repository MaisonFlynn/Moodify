const axios = require('axios');

// List O' Bio
const stuff = [
  "💭 Ponderin'",
  "🎯 Dialled",
  "🧩 Perplexed",
  "☁️ Cloud 9",
  "😴 'eepy",
  "👨🏻‍🍳 Cooked",
  "🧙🏻‍♂️ Type Sh*t"
];

// Send PATCH @ GitHub API w/ Ramdom "Stuff"
axios.patch('https://api.github.com/user', {
  bio: stuff[Math.floor(Math.random() * stuff.length)]
}, {
  headers: {
    'Authorization': `token ${process.env.SHUSH}`, // GitHub Token
    'Content-Type': 'application/json'
  }
})
  .then(() => console.log('Hunky-Dory!'))
  .catch(err => console.error(`Whoopsie-Daisy: ${err.response?.status || 'Crickets...'}`));
