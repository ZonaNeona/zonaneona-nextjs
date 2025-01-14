"use client";

import React, { useEffect, useState } from "react";
import Requirements from "../../components/Course-Details/Course-Sections/Requirements";

const RequirementsPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://neonfest.ru/api/courses/2/") // Замените на ваш API-эндпоинт
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
      <h1>Тестирование компонента Requirements</h1>
      {data.courseRequirement && data.courseRequirement.map((req, index) => (
        <Requirements key={index} checkMatchCourses={req} />
      ))}
    </div>
  );
};

export default RequirementsPage;
