"use client";

import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import CategoryHeadTwo from "@/components/Category/CategoryHeadTwo";
import CourseFilterOneToggle from "@/components/Category/Filter/CourseFilterOneToggle";
import Pagination from "@/components/Common/Pagination";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";

const CourseFilteTwoTogglePage = () => {
  const [courses, setCourses] = useState([]); // Хранение списка курсов
  const [page, setPage] = useState(1); // Текущая страница
  const [totalPages, setTotalPages] = useState(0); // Всего страниц
  const [isLoading, setIsLoading] = useState(true); // Индикатор загрузки

  const startIndex = (page - 1) * 6; // Индекс для пагинации
  const getSelectedCourse = courses.slice(startIndex, startIndex + 6); // Курсы для текущей страницы

  const handleClick = (num) => {
    setPage(num);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Получение данных с API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setIsLoading(true); // Включаем индикатор загрузки
        const response = await fetch("http://zn.igorsh9i.beget.tech/api/courses/");
        if (!response.ok) {
          throw new Error("Ошибка при загрузке курсов");
        }
        const data = await response.json();
        setCourses(data.courses); // Сохраняем курсы
        setTotalPages(Math.ceil(data.courses.length / 6)); // Рассчитываем количество страниц
      } catch (error) {
        console.error("Ошибка:", error.message);
      } finally {
        setIsLoading(false); // Выключаем индикатор загрузки
      }
    };

    fetchCourses();
  }, []);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType={true} />
          <MobileMenu />
          <Cart />

          <CategoryHeadTwo category={courses} />
          <div className="rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="inner">
              <div className="container">
                <CourseFilterOneToggle course={getSelectedCourse} />

                {courses.length > 6 && (
                  <div className="row">
                    <div className="col-lg-12 mt--60">
                      <Pagination
                        totalPages={totalPages}
                        pageNumber={page}
                        handleClick={handleClick}
                      />
                    </div>
                  </div>
                )}
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

export default CourseFilteTwoTogglePage;
