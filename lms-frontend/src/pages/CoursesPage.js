import React, { useState, useEffect } from 'react';
import api from '../api';
import CourseCard from '../components/CourseCard';
import Loader from '../components/Loader';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await api.get('/courses');
        setCourses(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch courses:', error);
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <h1>Available Courses</h1>
      <div className="course-list">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;