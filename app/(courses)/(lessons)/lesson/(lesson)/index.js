import { useEffect, useState } from "react";
import LessonSidebar from "@/components/Lesson/LessonSidebar";
import LessonPagination from "@/components/Lesson/LessonPagination";
import LessonTop from "@/components/Lesson/LessonTop";

const LessonPage = () => {
  const [lesson, setLesson] = useState(null);

  // Загружаем данные с API
  useEffect(() => {
    fetch("https://neonfest.ru/api/lessons/")
      .then((response) => response.json())
      .then((data) => {
        // Ищем урок с id = 31
        const selectedLesson = data.find((lesson) => lesson.id === 31);
        setLesson(selectedLesson); // Устанавливаем урок в состояние
      })
      .catch((error) => console.error("Ошибка загрузки урока:", error));
  }, []);

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
                  src="https://www.youtube.com/embed/qKzhrXqT6oE"
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
