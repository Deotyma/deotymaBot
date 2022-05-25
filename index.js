require('dotenv').config();

console.log('Bot is working')

const Twit = require('twit');
const axios = require('axios').default; 

var T = new Twit({
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  })

 /*  T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
    console.log(data)
  }) */

  const randomQuote = async () =>{
      const response = await axios.get('https://programming-quotes-api.herokuapp.com/Quotes/random');
      const quote = `${await response.data.en} - ${await response.data.author}`;
      return quote
  };
  randomQuote();

