const axios = require('axios');

const kerfuffle = [
  "💭 Ponderin'",
  "🎯 Dialled",
  "🧩 Perplexed",
  "☁️ Cloud 9",
  "😴 'eepy",
  "👨🏻‍🍳 Cooked",
  "🧙🏻‍♂️ Type Sh*t"
];

axios.post('https://api.github.com/graphql', {
  query: `
    mutation {
      changeUserStatus(input: { message: "${kerfuffle[Math.floor(Math.random() * kerfuffle.length)]}" }) {
        status {
          message
        }
      }
    }
  `
}, {
  headers: {
    'Authorization': `Bearer ${process.env.SHUSH}`, // GitHub Token
    'Content-Type': 'application/json'
  }
})
  .then(() => console.log('Hunky-Dory!'))
  .catch(err => console.error(`Whoopsie-Daisy: ${err.response?.status || 'Crickets...'}`));
