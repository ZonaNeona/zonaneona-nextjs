"use client";

import React, { useEffect, useState } from "react";
import Viedo from "../../components/Course-Details/Course-Sections/Viedo";

const ViedoTestPage = () => {
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
      <h1>Тестирование компонента Viedo</h1>
      {/* Передача данных в компонент Viedo */}
      <Viedo checkMatchCourses={data} />
    </div>
  );
};

export default ViedoTestPage;
