const mongoose = require('mongoose');

// TODO: complete movie schema
const movieSchema = new mongoose.Schema({

});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;