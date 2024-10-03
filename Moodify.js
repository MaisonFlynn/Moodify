const axios = require('axios');

// Jargon
const kerfuffle = [
  "💭 Ponderin'",
  "🎯 Dialled",
  "🧩 Perplexed",
  "☁️ Cloud 9",
  "😴 'eepy",
  "👨🏻‍🍳 Cooked",
  "🧙🏻‍♂️ Type Sh*t"
];

axios.patch('https://api.github.com/user', {
  bio: kerfuffle[Math.floor(Math.random() * kerfuffle.length)]
}, {
  headers: {
    'Authorization': `token ${process.env.SHUSH}`, // GitHub Token
    'Content-Type': 'application/json'
  }
})
  .then(() => console.log('Hunky-Dory!'))
  .catch(err => console.error(`Whoopsie-Daisy: ${err.response?.status || 'Crickets...'}`));
