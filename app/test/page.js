"use client";

import React, { useEffect, useState } from "react";
import SimilarCourses from "../../components/Course-Details/Course-Sections/SimilarCourses";

const SimilarCoursesPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://neonfest.ru/api/courses/2/") // Ваш API-эндпоинт
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  if (!data) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h1>Тестирование компонента SimilarCourses</h1>
      <SimilarCourses similarCourses={data.similarCourse} />
    </div>
  );
};

export default SimilarCoursesPage;
