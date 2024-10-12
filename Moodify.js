const axios = require('axios');

const kerfuffle = [
  { emj: "💭", msg: "Ponderin'" },
  { emj: "🎯", msg: "Dialled" },
  { emj: "🧩", msg: "Perplexed" },
  { emj: "☁️", msg: "Cloud 9" },
  { emj: "💤", msg: "'eepy" }
];

const idk = kerfuffle[Math.floor(Math.random() * kerfuffle.length)];

axios.post(
  'https://api.github.com/graphql',
  {
    query: `
      mutation {
        changeUserStatus(input: { message: "${idk.msg}", emoji: "${idk.emj}" }) {
          status { message, emoji }
        }
      }
    `
  },
  {
    headers: {
      'Authorization': `Bearer ${process.env.SHUSH}`, // GitHub Token
      'Content-Type': 'application/json'
    }
  }
)
  .then(() => console.log('Hunky-Dory!'))
  .catch(err => console.error(`Whoopsie-Daisy: ${err?.response?.status || 'Crickets...'}`));
