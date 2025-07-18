const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  videoUrl: { type: String, required: true },
  resources: [{
    name: String,
    url: String
  }]
});

module.exports = mongoose.model('Lesson', LessonSchema);