const express = require('express');
const router = express.Router();
const { getCourses, getCourseById, createCourse, enrollCourse } = require('../controllers/courseController');
const { protect, admin } = require('../middlewares/authMiddleware');

router.route('/').get(getCourses).post(protect, admin, createCourse);
router.route('/:id').get(getCourseById);
router.route('/:id/enroll').post(protect, enrollCourse);

module.exports = router;