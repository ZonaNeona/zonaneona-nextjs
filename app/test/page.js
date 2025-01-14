"use client";

import React, { useEffect, useState } from "react";
import Instructor from "../../components/Course-Details/Course-Sections/Instructor";

const TestPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Запрос данных с API
    fetch("https://neonfest.ru/api/courses/2/")
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
      <h1>Тестирование компонента Instructor</h1>
      {/* Передача courseInstructor в компонент Instructor */}
      <Instructor instructor={data.courseInstructor} />
    </div>
  );
};

export default TestPage;
