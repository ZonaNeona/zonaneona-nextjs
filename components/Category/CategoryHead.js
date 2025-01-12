"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import CategoryBanner from "./Category-Banner";
import CourseFilter from "./Filter/CourseFilter";
import { useAppContext } from "@/context/Context";

const CategoryHead = ({
  category,
  filterItem,
  courseFilter,
  setCourseFilter,
}) => {
  const pathname = usePathname();
  const { toggle, setToggle } = useAppContext();
  const [filterToggle, setFilterToggle] = useState(true);
  const [activeTab, setActiveTab] = useState("Все курсы");

  // Получаем уникальные значения `courseType` из категории
  const uniqueCourseTypes = [
    "Все курсы",
    ...new Set(category.map((course) => course.courseType)),
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
          {category ? (
            <CategoryBanner category={category} />
          ) : (
            <CategoryBanner />
          )}

          <div className="rbt-course-top-wrapper mt--40 mt_sm--20">
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-5 col-md-12">
                  <div className="rbt-sorting-list d-flex flex-wrap align-items-center">
                    {pathname === "/course-card-3" ||
                    pathname === "/course-masonry" ? (
                      ""
                    ) : (
                      <div className="rbt-short-item switch-layout-container">
                        <ul className="course-switch-layout">
                          <li className="course-switch-item">
                            <button
                              className={`rbt-grid-view ${
                                pathname === "/course-card-2"
                                  ? !toggle
                                    ? "active"
                                    : ""
                                  : toggle
                                  ? "active"
                                  : ""
                              }`}
                              title="Grid Layout"
                              onClick={() => setToggle(!toggle)}
                            >
                              <i className="feather-grid"></i>
                              <span className="text ms-2">Grid</span>
                            </button>
                          </li>
                          <li className="course-switch-item">
                            <button
                              className={`rbt-grid-view ${
                                pathname === "/course-card-2"
                                  ? toggle
                                    ? "active"
                                    : ""
                                  : !toggle
                                  ? "active"
                                  : ""
                              }`}
                              title="List Layout"
                              onClick={() => setToggle(!toggle)}
                            >
                              <i className="feather-list"></i>
                              <span className="text ms-2">List</span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                    {category && (
                      <div className="rbt-short-item">
                        <span className="course-index">
                          Показано {courseFilter.length} из {category.length} курсов
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-lg-7 col-md-12">
                  <div className="rbt-sorting-list d-flex flex-wrap align-items-end justify-content-start justify-content-lg-end">
                    {pathname === "/course-with-sidebar" ? (
                      ""
                    ) : (
                      <div className="rbt-short-item">
                        <form action="#" className="rbt-search-style me-0">
                          <input
                            type="text"
                            placeholder="Поиск курса..."
                          />
                          <button
                            type="submit"
                            className="rbt-search-btn rbt-round-btn"
                          >
                            <i className="feather-search"></i>
                          </button>
                        </form>
                      </div>
                    )}
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
                              ? category.length
                              : category.filter(
                                  (course) => course.courseType === courseType
                                ).length}
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
