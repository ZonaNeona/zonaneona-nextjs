"use client";

import React, { useEffect, useState } from "react";

import { Provider } from "react-redux";
import Context from "@/context/Context";
import Store from "@/redux/store";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import CategoryHead from "@/components/Category/CategoryHead";
import CourseTab from "@/components/Category/Filter/CourseTab";

const CourseTabPage = () => {
  const [courseFilter, setCourseFilter] = useState([]); // Храним отфильтрованные курсы
  const [getAllCourse, setGetAllCourse] = useState([]); // Храним все курсы из API

  // Получение данных из API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("https://neonfest.ru/api/courses/"); // Ваш API эндпоинт
        if (!response.ok) {
          throw new Error("Ошибка при получении данных с API");
        }
        const data = await response.json();
        setGetAllCourse(data); // Сохраняем все курсы
        setCourseFilter(data); // Сохраняем курсы для отображения (по умолчанию все)
      } catch (error) {
        console.error("Ошибка загрузки курсов:", error);
      }
    };

    fetchCourses();
  }, []);

  // Функция фильтрации курсов
  const filterItem = (types) => {
    const updateItem = getAllCourse.filter((curElm) => {
      return curElm.courseType === types;
    });

    if (types !== "All Course") {
      setCourseFilter(updateItem);
    } else {
      setCourseFilter(getAllCourse);
    }
  };

  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType={true} />
          <MobileMenu />
          <Cart />

          <CategoryHead
            courseFilter={courseFilter}
            setCourseFilter={setCourseFilter}
            filterItem={filterItem}
            category={getAllCourse}
          />
          <div className="rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="inner">
              <div className="container">
                <CourseTab course={courseFilter} />
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

export default CourseTabPage;
