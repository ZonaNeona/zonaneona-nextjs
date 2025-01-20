'use client';

import { useEffect, useState } from "react";
import LessonSidebar from "@/components/Lesson/LessonSidebar";
import LessonPagination from "@/components/Lesson/LessonPagination";
import LessonTop from "@/components/Lesson/LessonTop";
import { useRouter } from "next/router";  // Добавляем для получения параметров URL

const LessonPage = () => {
  const [lesson, setLesson] = useState(null);
  const router = useRouter();
  const { lessonId } = router.query; // Получаем параметр lessonId из URL

  // Загружаем данные с API
  useEffect(() => {
    if (lessonId) {  // Проверяем, что lessonId существует в URL
      fetch(`https://neonfest.ru/api/lessons/${lessonId}`)
        .then((response) => response.json())
        .then((data) => setLesson(data)) // Устанавливаем полученные данные в состояние
        .catch((error) => console.error("Ошибка загрузки урока:", error));
    }
  }, [lessonId]);  // Выполняем запрос, когда lessonId изменяется

  if (!lesson) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="rbt-lesson-area bg-color-white">
        <div className="rbt-lesson-content-wrapper">
          <div className="rbt-lesson-leftsidebar">
            <LessonSidebar />
          </div>

          <div className="rbt-lesson-rightsidebar overflow-hidden lesson-video">
            <LessonTop />
            <div className="inner">
              <div className="plyr__video-embed rbtplayer">
                <iframe
                  className="w-100"
                  src="https://rutube.ru/play/embed/8abca8a82b266edcc256eb7fb061abbe"
                  style={{ minHeight: "615px" }}
                ></iframe>
              </div>
              <div className="content">
                <div className="section-title">
                  <h4>{lesson.title}</h4>
                  {/* Вставляем HTML-контент с помощью dangerouslySetInnerHTML */}
                  <div
                    className="lesson-content"
                    dangerouslySetInnerHTML={{ __html: lesson.content }} // Вставляем HTML
                  />
                </div>
              </div>
            </div>
            <LessonPagination urlPrev="#" urlNext="/lesson-intro" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LessonPage;
