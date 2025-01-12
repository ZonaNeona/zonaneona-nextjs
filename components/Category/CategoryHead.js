"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import CategoryBanner from "./Category-Banner";
import CourseFilter from "./Filter/CourseFilter";
import { useAppContext } from "@/context/Context";

const CategoryHead = ({
  category = [], // Добавлен дефолтный пустой массив
  filterItem,
  courseFilter = [], // Добавлен дефолтный пустой массив
  setCourseFilter,
}) => {
  const pathname = usePathname();
  const { toggle, setToggle } = useAppContext();
  const [filterToggle, setFilterToggle] = useState(true);
  const [activeTab, setActiveTab] = useState("Все курсы");

  // Получаем уникальные значения `courseType` из категории
  const uniqueCourseTypes = [
    "Все курсы",
    ...new Set(category?.map((course) => course.courseType).filter(Boolean)),
  ];

  const handleButtonClick = (courseType) => {
    setActiveTab(courseType);
    if (courseType === "Все курсы") {
      setCourseFilter(category);
    } else {
      const filteredCourses = category.filter(
        (course) => course.courseType === courseType
      );
      setCourseFilter(filteredCourses);
    }
  };

  return (
    <>
      <div className="rbt-page-banner-wrapper">
        <div className="rbt-banner-image"></div>

        <div className="rbt-banner-content">
          {category?.length ? (
            <CategoryBanner category={category} />
          ) : (
            <CategoryBanner />
          )}

          <div className="rbt-course-top-wrapper mt--40 mt_sm--20">
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-5 col-md-12">
                  <div className="rbt-sorting-list d-flex flex-wrap align-items-center">
                    <div className="rbt-short-item switch-layout-container">
                      <ul className="course-switch-layout">
                        <li className="course-switch-item">
                          <button
                            className={`rbt-grid-view ${
                              toggle ? "active" : ""
                            }`}
                            title="Grid Layout"
                            onClick={() => setToggle(true)}
                          >
                            <i className="feather-grid"></i>
                            <span className="text ms-2">Таблица</span>
                          </button>
                        </li>
                        <li className="course-switch-item">
                          <button
                            className={`rbt-grid-view ${
                              !toggle ? "active" : ""
                            }`}
                            title="List Layout"
                            onClick={() => setToggle(false)}
                          >
                            <i className="feather-list"></i>
                            <span className="text ms-2">Список</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="rbt-short-item">
                      <span className="course-index">
                        Показано {courseFilter?.length || 0} из{" "}
                        {category?.length || 0} курсов
                      </span>
                    </div>
                  </div>
                </div>

                {/* Фильтры по формату курсов */}
                <div className="col-lg-12 mt--60">
                  <ul
                    className="rbt-portfolio-filter filter-tab-button justify-content-start nav nav-tabs"
                    id="rbt-myTab"
                    role="tablist"
                  >
                    {uniqueCourseTypes.map((courseType, index) => (
                      <li key={index} className="nav-item" role="presentation">
                        <button
                          className={`${
                            activeTab === courseType ? "active" : ""
                          }`}
                          type="button"
                          onClick={() => handleButtonClick(courseType)}
                        >
                          <span className="filter-text">{courseType}</span>
                          <span className="course-number">
                            {courseType === "Все курсы"
                              ? category?.length || 0
                              : category?.filter(
                                  (course) => course.courseType === courseType
                                ).length || 0}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryHead;
