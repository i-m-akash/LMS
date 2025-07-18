import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>Instructor: {course.instructor}</p>
      <p>${course.price}</p>
      <Link to={`/course/${course._id}`}>View Details</Link>
    </div>
  );
};

export default CourseCard;