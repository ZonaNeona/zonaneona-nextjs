"use client";

import React, { useEffect, useState } from "react";
import Content from "../../components/Course-Details/Course-Sections/Course-Menu";


const TestPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Пример запроса данных с API
   
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
      <h1>Тестирование компонента Content</h1>
      <Content checkMatchCourses={data} />
    </div>
  );
};

export default TestPage;
