const router = require('express').Router();
const Movie = require('../models/Movie');
const verify = require('../verifyToken');

//CREATE
router.post('/', verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);

    try {
      const savedMovie = await newMovie.save();
      res.status(201).json(savedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json('You are not allowed to create the movie!');
  }
});

//UPDATE
router.put('/:id', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      console.log('Going to update');
      const updatedMovie = Movie.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json('Movie has been updated ...');
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json('You are not allowed to update the movie!');
  }
});

//DELETE
router.delete('/:id', verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      console.log('Going to delete');
      const updatedMovie = await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json('Movie has been deleted ...');
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json('You are not allowed to delete the movie!');
  }
});

//GET
router.get('/find/:id', verify, async (req, res) => {
  try {
    console.log('Going to get some movie');
    console.log(req.params.id);
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET RANDOM
router.get('/random', verify, async (req, res) => {
  const type = req.query.type;
  let movie;
  try {
    if (type === 'series') {
      movie = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    }

    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL
router.get('/', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const movie = await Movie.find();
      res.status(200).json(movie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json('You are not allowed to get all movies!');
  }
});

module.exports = router;
