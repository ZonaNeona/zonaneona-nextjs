import Link from "next/link";
import React from "react";

const Content = ({ modules, tests, assignments }) => {
  if (!modules || modules.length === 0) return <p>Модули отсутствуют</p>;

  return (
    <div className="rbt-course-feature-inner">
      <div className="section-title">
        <h4 className="rbt-title-style-3">Модули курса</h4>
      </div>

      <div className="rbt-accordion-style rbt-accordion-02 accordion">
        <div className="accordion" id="accordionExampleb2">
          {modules.map((module, innerIndex) => (
            <div className="accordion-item card" key={innerIndex}>
              <h2
                className="accordion-header card-header"
                id={`headingTwo${innerIndex}`}
              >
                <button
                  className={`accordion-button ${
                    !module.collapsed ? "collapsed" : ""
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapseTwo${innerIndex}`}
                  aria-expanded={module.expand}
                  aria-controls={`collapseTwo${innerIndex}`}
                >
                  {module.title}
                  <span className="rbt-badge-5 ml--10">{module.time}</span>
                </button>
              </h2>

              <div
                id={`collapseTwo${innerIndex}`}
                className={`accordion-collapse collapse ${
                  module.isShow ? "show" : ""
                }`}
                aria-labelledby={`headingTwo${innerIndex}`}
                data-bs-parent="#accordionExampleb2"
              >
                <div className="accordion-body card-body pr--0">
                  <ul className="rbt-course-main-content liststyle">
                    {module.lessons &&
                      module.lessons.map((lesson, subIndex) => (
                        <li key={subIndex}>
                          <Link href={`/lessons/${lesson.id}`}>
                            <div className="course-content-left">
                              {/* Иконка типа урока */}
                              {lesson.lesson_type === "lecture" ? (
                                <i className="feather-file-text"></i>
                              ) : (
                                <i className="feather-play-circle"></i>
                              )}
                              <span className="text">{lesson.title}</span>
                            </div>

                            <div className="course-content-right">
                              <span className="min-lable">{lesson.time}</span>
                              {lesson.isFree ? (
                                <span className="rbt-badge variation-03 bg-secondary-opacity">
                                  Открытый урок
                                </span>
                              ) : (
                                <span className="course-lock">
                                  <i className="feather-lock"></i>
                                </span>
                              )}
                            </div>
                          </Link>
                        </li>
                      ))}
                  </ul>
                  
                  {/* Выводим тесты */}
                  <div className="tests">
                    <h5>Тесты</h5>
                    {tests && tests.length > 0 ? (
                      <ul>
                        {tests.map((test) => (
                          <li key={test.id}>
                            <Link href={`/tests/${test.id}`}>
                              <div className="course-content-left">
                                <i className="feather-check-square"></i> {/* Иконка для теста */}
                                <span className="text">{test.title}</span>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>Тесты отсутствуют</p>
                    )}
                  </div>
                  
                  {/* Выводим задания */}
                  <div className="assignments">
                    <h5>Задания</h5>
                    {assignments && assignments.length > 0 ? (
                      <ul>
                        {assignments.map((assignment) => (
                          <li key={assignment.id}>
                            <Link href={`/assignments/${assignment.id}`}>
                              <div className="course-content-left">
                                <i className="feather-edit-2"></i> {/* Иконка для задания */}
                                <span className="text">{assignment.title}</span>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>Задания отсутствуют</p>
                    )}
                  </div>

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
