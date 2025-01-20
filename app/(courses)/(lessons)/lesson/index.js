'use client';

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import sal from "sal.js";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import LessonSidebar from "@/components/Lesson/LessonSidebar";
import LessonPagination from "@/components/Lesson/LessonPagination";
import LessonTop from "@/components/Lesson/LessonTop";

const Lesson = ({ getParams }) => {
  const router = useRouter();
  const lessonId = parseInt(getParams.lessonId); // Получаем ID урока
  const courseId = router.query.courseId || null; // Получаем courseId из URL
  const [lessonData, setLessonData] = useState(null);
  const [courseData, setCourseData] = useState(null); // Для данных о курсе
  const [loading, setLoading] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false); // Для отображения бокового меню

  useEffect(() => {
    if (!lessonId) {
      router.push("/"); // Если нет ID урока, перенаправляем на главную
      return;
    }

    // Функция для загрузки данных о уроке
    const fetchLessonData = async () => {
      try {
        const response = await fetch(`https://neonfest.ru/api/lessons/${lessonId}/`);
        if (!response.ok) throw new Error("Ошибка загрузки данных о уроке");
        const data = await response.json();
        setLessonData(data);
      } catch (error) {
        console.error(error);
        router.push("/");
      }
    };

    // Функция для загрузки данных о курсе
    const fetchCourseData = async () => {
      if (courseId) {
        try {
          const response = await fetch(`https://neonfest.ru/api/courses/${courseId}/`);
          if (!response.ok) throw new Error("Ошибка загрузки данных о курсе");
          const data = await response.json();
          setCourseData(data);
          setShowSidebar(true); // Если курс существует, показываем боковое меню
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchLessonData();
    fetchCourseData();

    sal({ threshold: 0.01, once: true });

    setLoading(false);
  }, [lessonId, courseId, router]);

  if (loading) return <p>Загрузка...</p>;
  if (!lessonData) return null;

  return (
    <>
      <div className="rbt-lesson-area bg-color-white">
        <div className="rbt-lesson-content-wrapper">
          {showSidebar && courseData && (
            <div className="rbt-lesson-leftsidebar">
              <LessonSidebar courseData={courseData} />
            </div>
          )}

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
                  <h4>{lessonData.title}</h4>
                  <div
                    className="lesson-content"
                    dangerouslySetInnerHTML={{ __html: lessonData.content }}
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

export default Lesson;
