"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import CategoryHead from "@/components/Category/CategoryHead";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import CourseFilterOneToggle from "@/components/Category/Filter/CourseFilterOneToggle";

const SingleCoursePage = ({ getParams }) => {
  const router = useRouter();
  const [filteredCourses, setFilteredCourses] = useState([]); // Отфильтрованные курсы
  const [isLoading, setIsLoading] = useState(true); // Индикатор загрузки
  const courseId = getParams.courseId;

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setIsLoading(true); // Включаем индикатор загрузки
        const response = await fetch(
          `http://zn.igorsh9i.beget.tech/api/courses/`
        );
        if (!response.ok) {
          throw new Error("Ошибка при загрузке данных о курсах");
        }
        const data = await response.json();

        // Найти курсы по категории (или ID)
        const matchedCourse = data.courses.find(
          (course) => course.id.toString() === courseId
        );

        const filteredCourses = data.courses.filter(
          (course) => course.category === matchedCourse?.category
        );

        if (!matchedCourse) {
          router.push("/course-filter-one-toggle"); // Если курс не найден, перенаправляем
        }

        setFilteredCourses(filteredCourses); // Сохраняем найденные курсы
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false); // Отключаем индикатор загрузки
      }
    };

    fetchCourse();
  }, [courseId]);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (!filteredCourses.length) {
    return <div>Курсы не найдены</div>;
  }

  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType={true} />
          <MobileMenu />
          <Cart />

          <CategoryHead category={filteredCourses[0]} />

          <div className="rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="inner">
              <div className="container">
                <CourseFilterOneToggle course={filteredCourses} />
              </div>
            </div>
          </div>

          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default SingleCoursePage;
