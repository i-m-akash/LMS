import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import AuthContext from '../contexts/AuthContext';
import Loader from '../components/Loader';

const CourseDetailPage = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const { data } = await api.get(`/courses/${id}`);
        setCourse(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch course details', error);
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  const handleEnroll = async () => {
    try {
      await api.post(`/courses/${id}/enroll`);
      alert('Enrolled successfully!');
    } catch (error) {
      alert('Failed to enroll.');
    }
  };

  if (loading) return <Loader />;
  if (!course) return <p>Course not found.</p>;

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <h4>Instructor: {course.instructor}</h4>
      <p>Price: ${course.price}</p>
      
      {user && <button onClick={handleEnroll}>Enroll Now</button>}

      <div className="course-content">
        <h2>Lessons</h2>
        <ul>
          {course.lessons.map(lesson => <li key={lesson._id}>{lesson.title}</li>)}
        </ul>
        
        <h2>Quizzes</h2>
        <ul>
          {course.quizzes.map(quiz => <li key={quiz._id}>{quiz.title}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetailPage;
