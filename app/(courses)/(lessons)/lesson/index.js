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
  const postId = parseInt(getParams.lessonId);
  const [lessonData, setLessonData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!lessonId) {
      router.push("/");
      return;
    }

    const fetchLessonData = async () => {
      try {
        const response = await fetch(`https://neonfest.ru/api/courses/${lessonId}/`);
        if (!response.ok) throw new Error("Ошибка загрузки данных");
        const data = await response.json();
        setLesosnData(data);
      } catch (error) {
        console.error(error);
        router.push("/");
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();

    sal({ threshold: 0.01, once: true });
  }, [lessonId, router]);

  if (loading) return <p>Загрузка...</p>;
  if (!lessonData) return null;

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
