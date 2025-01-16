"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import sal from "sal.js";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Cart from "@/components/Header/Offcanvas/Cart";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import CourseHead from "@/components/Course-Details/Course-Sections/course-head";
import CourseDetailsOne from "@/components/Course-Details/CourseDetails-One";
import CourseActionBottom from "@/components/Course-Details/Course-Sections/Course-Action-Bottom";
import SimilarCourses from "@/components/Course-Details/Course-Sections/SimilarCourses";

const SingleCourse = ({ getParams }) => {
  const router = useRouter();
  const postId = parseInt(getParams.courseId);
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!postId) {
      router.push("/course-filter-one-toggle");
      return;
    }

    const fetchCourseData = async () => {
      try {
        const response = await fetch(`https://neonfest.ru/api/courses/${postId}/`);
        if (!response.ok) throw new Error("Ошибка загрузки данных");
        const data = await response.json();
        setCourseData(data);
      } catch (error) {
        console.error(error);
        router.push("/course-filter-one-toggle");
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();

    sal({ threshold: 0.01, once: true });
  }, [postId, router]);

  if (loading) return <p>Загрузка...</p>;
  if (!courseData) return null;

  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleTen headerSticky="" headerType={true} />
          <Cart />

          <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3">
            <CourseHead checkMatch={courseData} />
          </div>

          <div className="rbt-course-details-area ptb--60">
            <div className="container">
              <div className="row g-5">
                <CourseDetailsOne checkMatchCourses={courseData} />
              </div>
            </div>
          </div>

          <CourseActionBottom checkMatchCourses={courseData} />

          <div className="rbt-related-course-area bg-color-white pt--60 rbt-section-gapBottom">
            <SimilarCourses checkMatchCourses={courseData.similarCourse || []} />
          </div>

          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default SingleCourse;
