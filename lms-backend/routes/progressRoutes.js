const express = require('express');
const router = express.Router();
const { markLessonAsCompleted, attemptQuiz, getCourseProgress } = require('../controllers/progressController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/lessons/complete', protect, markLessonAsCompleted);
router.post('/quizzes/attempt', protect, attemptQuiz);
router.get('/courses/:courseId/progress', protect, getCourseProgress);

module.exports = router;