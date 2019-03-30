const createError = require('http-errors');
const mongoose = require('mongoose');
const Movie = require('../models/movie.model');

module.exports.list = (req, res, next) => {
  // TODO: Render movies/list with all database movies
  const criteria = {};
  if(req.query.title){
    criteria.title = new RegExp(req.query.title, 'i');
  }
  Movie.find(criteria)
  .then(movies => res.render('movies/list',{
    movies,
    title: req.query.title
  }))
  .catch(error => next(error));
}

// TODO: movie detail action

module.exports.details = (req, res, next) => {
  // TODO: Render movies/list with all database movies
  const id = req.params.id;
  if(!mongoose.Types.ObjectId.isValid(id)){
    hbs.registerPartials(path.join(__dirname, 'views/partials'))
    next (createError(404, 'movie not found'))
  }
  else{
    Movie.findById(id)
     .then(movie => {
       if (movie){
         res.render('movies/details',{movie})
       } else {
         next (createError(404, 'movie not found'))
       } 
     })
     .catch (error => next(error));
    
  }
}


