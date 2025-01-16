import Image from "next/image";
import React from "react";

const BonusSection = ({ bonuses }) => {
  return (
    <div className="container mt--60">
      <div className="row g-5">
        <div className="col-12">
          <div className="section-title">
            <h4 className="title">
              <strong className="color-primary ms-3">Бонусы</strong>
            </h4>
          </div>
        </div>

        {bonuses &&
          bonuses.map((bonus, index) => (
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-12"
              key={index}
            >
              <div className="rbt-team-modal-thumb nav nav-tabs">
                <a
                  className="rbt-team-thumbnail"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target={`#bonusModal${index}`}
                >
                  <div className="thumb">
                    {bonus.image ? (
                      <Image
                        src={bonus.image}
                        width={355}
                        height={244}
                        priority
                        alt={bonus.title}
                      />
                    ) : (
                      <div className="placeholder-image">Без картинки</div>
                    )}
                  </div>
                  <h6 className="text-center mt-5">{bonus.title}</h6>
                </a>
              </div>
            </div>
          ))}
      </div>

      {/* Popup Windows */}
      {bonuses &&
        bonuses.map((bonus, index) => (
          <div
            className="rbt-team-modal modal fade rbt-modal-default"
            id={`bonusModal${index}`}
            tabIndex="-1"
            aria-labelledby={`bonusModal${index}`}
            aria-hidden="true"
            key={index}
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
                          <p className="mb--15">{bonus.description}</p>

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
                    <div className="top-circle-shape"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BonusSection;
