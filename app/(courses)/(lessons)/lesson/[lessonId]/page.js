import React from 'react';

const LessonPage = ({ lesson }) => {
  if (!lesson) return <p>Урок не найден</p>;

  return (
    <div className="lesson-detail">
      <h1>{lesson.title}</h1>
      <p>{lesson.description}</p>
      {/* Добавьте другие данные урока */}
    </div>
  );
};

// Функция для получения данных
export async function generateServerSideProps({ params }) {
  const { lessonId } = params;
  const res = await fetch(`http://neonfest.ru/api/lessons/${lessonId}`);
  const lesson = await res.json();

  return {
    props: { lesson }
  };
}

export default LessonPage;
