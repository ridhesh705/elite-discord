// Adding Twitter forward function
const Twit = require('twit');
const T = new Twit({
  consumer_key: process.env.API_TOKEN,
  consumer_secret: process.env.API_SECRET,
  access_token: process.env.ACCESS_KEY,
  access_token_secret: process.env.ACCESS_SECRET,
  bearer_token: process.env.BEARER_TOKEN,
  timeout_ms: 60 * 1000,
});

// Destination channel Twitter forwards
const dest = '803285069715865601';
// Create a stream to follow tweets
const stream = T.stream('statuses/filter', {
  follow: '32771325', // @Stupidcounter
});

stream.on('tweet', (tweet) => {
  const twitterMessage = `Read the latest tweet by ${tweet.user.name} (@${tweet.user.screen_name}) here: https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`;
  client.channels.cache.get(dest).send(twitterMessage);
  return;
});
