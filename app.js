const express = require('express');

const app = express();

// Routes

// Home
app.get('/', function(req, res){
  res.send('This is a server response on the home page');
});

// movie_single
app.get('/star_wars_episode/:episode_number?', function(req, res){
  let episode_number = req.params.episode_number;
  res.send('This is the page for episode ' + episode_number)
});

// noteFound
app.get('*', function(req, res){
  res.send('This is not the page that you are looking for');
})

app.listen(3000, function(){
  console.log('The application is running on localhost 3000')
});
