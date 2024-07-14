const mongoose = require('mongoose');

const SuggestionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  suggestion: { type: String, required: true },
});

module.exports = mongoose.model('Suggestion', SuggestionSchema);
