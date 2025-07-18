const Course = require('../models/Course');

exports.createCourse = async (req, res) => {
  const { title, description, instructor, price } = req.body;
  try {
    const course = await Course.create({ title, description, instructor, price });
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate('lessons quizzes');
    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.enrollCourse = async (req, res) => {
  // Implementation for enrolling a user in a course
  // This would typically involve creating a Progress document
  res.status(200).json({ message: 'Enrolled successfully' });
};