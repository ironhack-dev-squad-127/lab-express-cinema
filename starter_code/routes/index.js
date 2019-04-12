const express = require('express')
const Movie = require('../models/Movie')
const router  = express.Router()

// GET /
router.get('/', (req, res, next) => {
  res.render('index')
})

module.exports = router
