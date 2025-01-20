'use client';

import { useEffect, useState } from "react";
import LessonSidebar from "@/components/Lesson/LessonSidebar";
import LessonPagination from "@/components/Lesson/LessonPagination";
import LessonTop from "@/components/Lesson/LessonTop";
import { useRouter } from "next/router";  // Для получения параметров URL

const LessonPage = () => {
  const [lesson, setLesson] = useState(null);
  const router = useRouter();
  const { lessonId } = router.query; // Получаем параметр lessonId из URL

  // Загружаем данные с API
  useEffect(() => {
    if (router.isReady && lessonId) {  // Проверяем, что роутер и lessonId готовы
      fetch(`https://neonfest.ru/api/lessons/${lessonId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Ошибка загрузки урока");
          }
          return response.json();
        })
        .then((data) => setLesson(data)) // Устанавливаем полученные данные в состояние
        .catch((error) => console.error("Ошибка загрузки урока:", error));
    }
  }, [router.isReady, lessonId]);  // Выполняем запрос, когда роутер готов и lessonId изменяется

  if (!lesson) {
    return <div>Loading...</div>;  // Пока данные не загружены, показываем "Loading..."
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
                  title="Lesson Video"
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
