const express = require('express')
const Movie = require('../models/Movie')
const router  = express.Router()

// GET /movies (because it's prefixed by "/movies" in app.js)
router.get('/', (req, res, next) => {
  Movie.find()
    .then(moviesFromDb => {
      // Render "views/list-movies.hbs"
      res.render('list-movies', {
        movies: moviesFromDb
      })
    })
})

// GET /movies/aMovieId (because it's prefixed by "/movies" in app.js)
router.get('/:movieId', (req, res, next) => {
  let movieId = req.params.movieId
  Movie.findById(movieId)
    .then(movieFromDb => {
      res.render('movie-detail', {
        movie: movieFromDb
      })
    })
})

module.exports = router
