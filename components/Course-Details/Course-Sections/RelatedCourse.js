"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const RelatedCourse = ({ checkMatchCourses }) => {
  if (!checkMatchCourses || checkMatchCourses.length === 0) {
    return <div>Связанные курсы отсутствуют.</div>;
  }

  return (
    <>
      <div className="row g-5 align-items-end mb--40">
        <div className="col-lg-8 col-md-8 col-12">
          <div className="section-title">
            <span className="subtitle bg-pink-opacity">Top Course</span>
            <h4 className="title">
              More Course By
              <strong className="color-primary ms-3">
                {checkMatchCourses[0]?.author || "Неизвестный автор"}
              </strong>
            </h4>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12">
          <div className="read-more-btn text-start text-md-end">
            <a className="rbt-btn rbt-switch-btn btn-border btn-sm" href="#">
              <span data-text="View All Course">View All Course</span>
            </a>
          </div>
        </div>
      </div>
      <div className="row g-5">
        {checkMatchCourses.map((data, index) => (
          <div
            className="col-lg-6 col-md-6 col-sm-6 col-12"
            key={index}
          >
            <div className="rbt-card variation-01 rbt-hover">
              <div className="rbt-card-img">
                <Link href={`/course-details/${data.id}`}>
                  <Image
                    src={data.courseImg}
                    width={355}
                    height={244}
                    alt="Card image"
                  />
                  {data.discount > 0 && (
                    <div className="rbt-badge-3 bg-white">
                      <span>-{data.discount}%</span>
                      <span>Off</span>
                    </div>
                  )}
                </Link>
              </div>
              <div className="rbt-card-body">
                <div className="rbt-card-top">
                  <div className="rbt-review">
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                    <span className="rating-count">({data.review} Reviews)</span>
                  </div>
                  <div className="rbt-bookmark-btn">
                    <Link className="rbt-round-btn" href="#">
                      <i className="feather-bookmark"></i>
                    </Link>
                  </div>
                </div>

                <h4 className="rbt-card-title">
                  <Link href={`/course-details/${data.id}`}>{data.courseTitle}</Link>
                </h4>

                <ul className="rbt-meta">
                  <li>
                    <i className="feather-book"></i>
                    {data.lesson} Lessons
                  </li>
                  <li>
                    <i className="feather-users"></i>
                    {data.student} Students
                  </li>
                </ul>

                <p className="rbt-card-text">{data.desc}</p>
                <div className="rbt-author-meta mb--10">
                  <div className="rbt-avater">
                    <Link href={`/profile/${data.id}`}>
                      <Image
                        src={data.courseListImg}
                        width={33}
                        height={33}
                        alt="Author Image"
                      />
                    </Link>
                  </div>
                  <div className="rbt-author-info">
                    By <Link href={`/profile/${data.id}`}>{data.author}</Link>
                    In <Link href="#">{data.category}</Link>
                  </div>
                </div>
                <div className="rbt-card-bottom">
                  <div className="rbt-price">
                    <span className="current-price">${data.price}</span>
                    <span className="off-price">${data.offPrice}</span>
                  </div>
                  {data.button ? (
                    <Link
                      className="rbt-btn-link left-icon"
                      href={`/course-details/${data.id}`}
                    >
                      <i className="feather-shopping-cart"></i> Add To Cart
                    </Link>
                  ) : (
                    <Link
                      className="rbt-btn-link"
                      href={`/course-details/${data.id}`}
                    >
                      Learn More<i className="feather-arrow-right"></i>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RelatedCourse;
