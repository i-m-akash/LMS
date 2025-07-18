const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  options: [{
    text: String,
    isCorrect: Boolean
  }]
});

const QuizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  questions: [QuestionSchema]
});

module.exports = mongoose.model('Quiz', QuizSchema);