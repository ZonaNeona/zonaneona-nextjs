"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const SimilarCourses = ({ checkMatchCourses }) => {
  if (!checkMatchCourses || checkMatchCourses.length === 0) {
    return <div>Рекомендуемые курсы отсутствуют.</div>;
  }

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
          {checkMatchCourses.map((item, innerIndex) => (
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              key={innerIndex}
            >
              <div className="rbt-card variation-01 rbt-hover">
                <div className="rbt-card-img">
                  <Link href={item.courseImg}>
                    <Image
                      src={item.courseImg}
                      width={355}
                      height={244}
                      alt="Card image"
                    />
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <h4 className="rbt-card-title">
                    <Link href={item.courseImg}>{item.courseTitle}</Link>
                  </h4>
                  <p className="rbt-card-text">{item.desc}</p>
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
