const express = require('express');
const Suggestion = require('../models/suggestion');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, suggestion } = req.body;

  try {
    const newSuggestion = new Suggestion({ name, suggestion });
    await newSuggestion.save();
    res.status(201).json(newSuggestion);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
