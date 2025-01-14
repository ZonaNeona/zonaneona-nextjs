import Link from "next/link";
import React from "react";

const Content = ({ checkMatchCourses }) => {
  // Проверка наличия модулей
  if (!checkMatchCourses || !checkMatchCourses.modules || !Array.isArray(checkMatchCourses.modules)) {
    console.error("Модули отсутствуют или имеют неверный формат", checkMatchCourses);
    return <p>Модули отсутствуют.</p>;
  }

  return (
    <div className="rbt-course-feature-inner">
      <div className="section-title">
        <h4 className="rbt-title-style-3">{checkMatchCourses.courseTitle || "Курс"}</h4>
      </div>
      <div className="rbt-accordion-style rbt-accordion-02 accordion">
        <div className="accordion" id="accordionExampleb2">
          {checkMatchCourses.modules.map((module, innerIndex) => (
            <div className="accordion-item card" key={innerIndex}>
              <h2
                className="accordion-header card-header"
                id={`headingTwo${innerIndex}`}
              >
                <button
                  className={`accordion-button ${module.collapsed ? "collapsed" : ""}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapseTwo${innerIndex + 1}`}
                  aria-expanded={module.expand || false}
                  aria-controls={`collapseTwo${innerIndex + 1}`}
                >
                  {module.title || "Без названия"}
                  <span className="rbt-badge-5 ml--10">{module.time || "Не указано"}</span>
                </button>
              </h2>
              <div
                id={`collapseTwo${innerIndex + 1}`}
                className={`accordion-collapse collapse ${module.isShow ? "show" : ""}`}
                aria-labelledby={`headingTwo${innerIndex}`}
                data-bs-parent="#accordionExampleb2"
              >
                <div className="accordion-body card-body pr--0">
                  <ul className="rbt-course-main-content liststyle">
                    {module.lessons && module.lessons.length > 0 ? (
                      module.lessons.map((lesson, subIndex) => (
                        <li key={subIndex}>
                          <Link href="/lesson">
                            <div className="course-content-left">
                              {lesson.isFree ? (
                                <i className="feather-play-circle"></i>
                              ) : (
                                <i className="feather-lock"></i>
                              )}
                              <span className="text">{lesson.title || "Без названия"}</span>
                            </div>
                            <div className="course-content-right">
                              <span className="min-lable">{lesson.time || "Не указано"}</span>
                            </div>
                          </Link>
                        </li>
                      ))
                    ) : (
                      <li>Уроки отсутствуют.</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
