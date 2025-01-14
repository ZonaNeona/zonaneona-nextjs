"use client";

import React, { useEffect, useState } from "react";
import RelatedCourse from "../../components/Course-Details/Course-Sections/RelatedCourse";

const RelatedCourses = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Запрос данных с API
    fetch("https://neonfest.ru/api/courses/2/") // Замените на ваш реальный API-эндпоинт
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
      <h1>Связанные курсы</h1>
      {/* Передача relatedCourse в компонент RelatedCourse */}
      <RelatedCourse checkMatchCourses={data.relatedCourse} />
    </div>
  );
};

export default RelatedCoursesPage;
