import Image from "next/image";
import React from "react";

const InfoSection = ({ roadmap, bonuses }) => {
  if (!roadmap || roadmap.length === 0) {
    roadmap = [{ text: "Нет данных", desc: "" }];
  }
  if (!bonuses || bonuses.length === 0) {
    bonuses = [{ title: "Нет бонусов", description: "" }];
  }

  return (
    <div className="rbt-course-feature-inner">
      <div className="section-title">
        <h4 className="rbt-title-style-3">Детальная информация</h4>
      </div>

      <div className="rbt-accordion-style rbt-accordion-02 accordion">
        <div className="accordion" id="accordionExampleb3">
          {/* Roadmap Accordion */}
          <div className="accordion-item card">
            <h2 className="accordion-header card-header" id="roadmapHeading">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#roadmapCollapse"
                aria-expanded="true"
                aria-controls="roadmapCollapse"
              >
                Все характеристики
              </button>
            </h2>
            <div
              id="roadmapCollapse"
              className="accordion-collapse collapse"
              aria-labelledby="roadmapHeading"
              data-bs-parent="#accordionExampleb3"
            >
              <div className="accordion-body card-body">
                <div className="table-responsive mobile-table-750">
                  <table className="rbt-table table table-borderless">
                    <tbody>
                      {roadmap.map((item, index) => (
                        <tr key={index}>
                          <th>{item.text}</th>
                          <td>{item.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Bonuses Accordion */}
          <div className="accordion-item card">
            <h2 className="accordion-header card-header" id="bonusesHeading">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#bonusesCollapse"
                aria-expanded="false"
                aria-controls="bonusesCollapse"
              >
                Бонусы
              </button>
            </h2>
            <div
              id="bonusesCollapse"
              className="accordion-collapse collapse"
              aria-labelledby="bonusesHeading"
              data-bs-parent="#accordionExampleb3"
            >
              <div className="accordion-body card-body">
                <ul className="rbt-course-main-content liststyle">
                  {bonuses.map((bonus, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target={`#bonusModal${index}`}
                      >
                        <div className="course-content-left">
                          <span className="text">{bonus.title}</span>
                        </div>
                        <div className="course-content-right">
                          <span className="rbt-badge variation-03 bg-secondary-opacity">
                            <i className="feather-eye"></i> Подробнее
                          </span>
                        </div>
                      </a>
                      {/* Bonus Modal */}
                      <div
                        className="rbt-team-modal modal fade rbt-modal-default"
                        id={`bonusModal${index}`}
                        tabIndex="-1"
                        aria-labelledby={`bonusModal${index}`}
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <button
                                type="button"
                                className="rbt-round-btn"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              >
                                <i className="feather-x"></i>
                              </button>
                            </div>
                            <div className="modal-body">
                              <div className="inner">
                                <div className="row g-5 row--30 align-items-center">
                                  <div className="col-lg-4">
                                    <div className="rbt-team-thumbnail">
                                      <div className="thumb">
                                        {bonus.image ? (
                                          <Image
                                            className="w-100"
                                            src={bonus.image}
                                            width={415}
                                            height={555}
                                            priority
                                            alt={bonus.title}
                                          />
                                        ) : (
                                          <div className="placeholder-image">
                                            No Image Available
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-8">
                                    <div className="rbt-team-details">
                                      <h4 className="title">{bonus.title}</h4>
                                      <p className="mb--15">
                                        {bonus.description}
                                      </p>
                                      <div className="links mt--20">
                                        {bonus.link_1 && (
                                          <a
                                            href={bonus.link_1}
                                            target="_blank"
                                            className="rbt-btn btn-border btn-sm mr--10"
                                            rel="noopener noreferrer"
                                          >
                                            {bonus.link_title_1 || "Link 1"}
                                          </a>
                                        )}
                                        {bonus.link_2 && (
                                          <a
                                            href={bonus.link_2}
                                            target="_blank"
                                            className="rbt-btn btn-border btn-sm"
                                            rel="noopener noreferrer"
                                          >
                                            {bonus.link_title_2 || "Link 2"}
                                          </a>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
