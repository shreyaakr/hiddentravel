const express = require('express');
const Contact = require('../models/contact');

const router = express.Router();

router.post('/contacts', async (req, res) => {
  // const { name, email, message } = req.body;

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
