const axios = require('axios');

// Array O' Biography
const array = [
  "💭 Ponderin'",
  "🎯 Dialled",
  "🧩 Perplexed",
  "☁️ Cloud 9",
  "😴 'eepy",
  "👨🏻‍🍳 Cooked",
  "🧙🏻‍♂️ Type Sh*t"
];

// Send PATCH @ GitHub API w/ Random Biography
axios.patch('https://api.github.com/user', {
  bio: array[Math.floor(Math.random() * array.length)]
}, {
  headers: {
    'Authorization': `token ${process.env.SHUSH}`, // GitHub Token
    'Content-Type': 'application/json'
  }
})
  .then(() => console.log('Hunky-Dory!'))
  .catch(err => console.error(`Whoopsie-Daisy: ${err.response?.status || 'Crickets...'}`));
