const axios = require('axios');

const kerfuffle = [
  { emoji: "💭", message: "Ponderin'" },
  { emoji: "🎯", message: "Dialled" },
  { emoji: "🧩", message: "Perplexed" },
  { emoji: "☁️", message: "☁Cloud 9" },
  { emoji: "😴", message: "'eepy" },
  { emoji: "👨🏻‍🍳", message: "Cooked" },
  { emoji: "🧙🏻‍♂️", message: "Type Sh*t" }
];

const randomStatus = kerfuffle[Math.floor(Math.random() * kerfuffle.length)];

axios.post('https://api.github.com/graphql', {
  query: `
    mutation {
      changeUserStatus(input: {
        message: "${randomStatus.message}",
        emoji: "${randomStatus.emoji}"
      }) {
        status {
          message
          emoji
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
  .then(() => console.log('Hunky-Dory! Status updated with message and emoji!'))
  .catch(err => console.error(`Whoopsie-Daisy: ${err.response?.status || 'Crickets...'}`));
