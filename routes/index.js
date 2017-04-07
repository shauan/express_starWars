const moviesJSON = require('../movies.json');


// Home
exports.home = function(req, res){

  let movies = moviesJSON.movies;

  res.render('home', {
    title: 'Star War Movies',
    movies: movies
  });
};

// movie_single
exports.movie_single = function(req, res){
  let episode_number = req.params.episode_number;
  res.send('This is the page for episode ' + episode_number);
};

// noteFound
exports.notFound = function(req, res){
  res.send('This is not the page that you are looking for');
};
