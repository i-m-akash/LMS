const mongoose = require('mongoose');

const QuizAttemptSchema = new mongoose.Schema({
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' },
  score: Number,
  attemptedAt: { type: Date, default: Date.now }
});

const ProgressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  completedLessons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lesson' }],
  quizAttempts: [QuizAttemptSchema],
  overallProgress: { type: Number, default: 0 }
});

module.exports = mongoose.model('Progress', ProgressSchema);