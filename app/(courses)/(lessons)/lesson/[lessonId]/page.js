'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Используем хук из next/navigation
import LessonSidebar from "@/components/Lesson/LessonSidebar";
import LessonPagination from "@/components/Lesson/LessonPagination";
import LessonTop from "@/components/Lesson/LessonTop";

const LessonPage = () => {
  const [lesson, setLesson] = useState(null);
  const router = useRouter();

  // Проверка, готов ли роутер
  const { lessonId } = router.query;

  // Загружаем данные с API
  useEffect(() => {
    if (router.isReady && lessonId) {  // Проверяем, что роутер готов и lessonId доступен
      fetch(`https://neonfest.ru/api/lessons/${lessonId}`)
        .then((response) => response.json())
        .then((data) => setLesson(data))
        .catch((error) => console.error("Ошибка загрузки урока:", error));
    }
  }, [router.isReady, lessonId]);  // Перезапуск при изменении lessonId или готовности роутера

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
                  <div
                    className="lesson-content"
                    dangerouslySetInnerHTML={{ __html: lesson.content }}
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
