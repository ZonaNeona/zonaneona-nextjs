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
          <span className="subtitle bg-primary-opacity">Рекомендуем</span>
          <h4 className="title">Другие курсы Эксперта</h4>
        </div>
        <div className="row g-5">
          {checkMatchCourses.map((item, innerIndex) => (
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              key={innerIndex}
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
                    {item.discount > 0 && (
                      <div className="rbt-badge-3 bg-white">
                        <span>-{item.discount}%</span>
                        <span>Off</span>
                      </div>
                    )}
                  </Link>
                </div>
                <div className="rbt-card-body">
                  <div className="rbt-card-top">
                    <div className="rbt-review">
                      <div className="rating">
                        {[...Array(Math.floor(Number(item.star) || 0))].map((_, i) => (
    <i className="fas fa-star" key={i}></i>
  ))}
                      </div>
                      
                          <span className="rating-count">
                      ({data.review} Отзывов) |{" "}
                      <i className="feather-users"></i> {data.student} Учеников
                    </span>
                    </div>
                    <div className="rbt-bookmark-btn">
                      <Link
                        className="rbt-round-btn"
                        title="Bookmark"
                        href="#"
                      >
                        <i className="feather-bookmark"></i>
                      </Link>
                    </div>
                  </div>
                  <h4 className="rbt-card-title">
                    <Link href={`/course-details/${item.id}`}>
                      {item.courseTitle}
                    </Link>
                  </h4>
                  <ul className="rbt-meta">
                    <li>
                      <i className="feather-book"></i> {item.lesson} Уроков
                    </li>
                    <li>
                      <i className="feather-check-square"></i>
                        7 Тестов
                    </li>
                        <li>
                        <i className="feather-edit"></i>
                          2 Заданий
                    </li>
                  </ul>
                  <p className="rbt-card-text">{item.desc}</p>
                  <div className="rbt-card-bottom">
                    <div className="rbt-price">
                      <span className="current-price">
                        {item.price} ₽
                      </span>
                      <span className="off-price">{item.offPrice} ₽</span>
                    </div>
                    <Link
                      className="rbt-btn-link"
                      href={`/course-details/${item.id}`}
                    >
                      Подробнее <i className="feather-arrow-right"></i>
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
