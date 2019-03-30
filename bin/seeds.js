const Movie = require('../models/movie.model')
const movies = require('../data/movies.json')
const mongoose = require('mongoose')

require('../conf/db.conf')

Movie.create(movies)
.then((movies)=> console.info(`${movies.length} - Movies created`) )
.catch(error => console.error(error))
.then(() => mongoose.connection.close());