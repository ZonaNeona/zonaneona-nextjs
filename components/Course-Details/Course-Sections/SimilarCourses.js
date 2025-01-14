import Image from "next/image";
import Link from "next/link";
import React from "react";

const SimilarCourses = ({ similarCourses }) => {
  return (
    <>
      <div className="container">
        <div className="section-title mb--30">
          <span className="subtitle bg-primary-opacity">
            More Similar Courses
          </span>
          <h4 className="title">Related Courses</h4>
        </div>
        <div className="row g-5">
          {similarCourses &&
            similarCourses.map((item, index) => (
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12"
                key={index}
              >
                <div className="rbt-card variation-01 rbt-hover">
                  <div className="rbt-card-img">
                    <Link href={`/course-details/${item.id}`}>
                      <Image
                        src={item.courseImg}
                        width={355}
                        height={244}
                        alt={item.courseTitle}
                      />
                      {item.discount ? (
                        <div className="rbt-badge-3 bg-white">
                          <span>-{item.discount}%</span>
                          <span>Off</span>
                        </div>
                      ) : null}
                    </Link>
                  </div>
                  <div className="rbt-card-body">
                    <div className="rbt-card-top">
                      <div className="rbt-review">
                        <div className="rating">
                          {[...Array(5)].map((_, starIndex) => (
                            <i
                              key={starIndex}
                              className={`fas fa-star ${
                                starIndex < item.star ? "color-warning" : ""
                              }`}
                            ></i>
                          ))}
                        </div>
                        <span className="rating-count">
                          ({item.review} Reviews)
                        </span>
                      </div>
                    </div>
                    <h4 className="rbt-card-title">
                      <Link href={`/course-details/${item.id}`}>
                        {item.courseTitle}
                      </Link>
                    </h4>
                    <ul className="rbt-meta">
                      <li>
                        <i className="feather-book"></i> {item.lesson} Lessons
                      </li>
                      <li>
                        <i className="feather-users"></i> {item.student} Students
                      </li>
                    </ul>
                    <p className="rbt-card-text">{item.desc}</p>
                    <div className="rbt-card-bottom">
                      <div className="rbt-price">
                        <span className="current-price">${item.price}</span>
                        {item.offPrice && (
                          <span className="off-price">${item.offPrice}</span>
                        )}
                      </div>
                      <Link
                        className="rbt-btn-link"
                        href={`/course-details/${item.id}`}
                      >
                        Learn More<i className="feather-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default SimilarCourses;
