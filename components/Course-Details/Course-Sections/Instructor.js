"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Instructor = ({ instructor }) => {
  if (!instructor) {
    return <div>Информация об эксперте отсутствует.</div>;
  }

  // Тестовые данные для отсутствующих свойств
  const defaultInstructorData = {
    ratingNumber: instructor.ratingNumber || 100, // Тестовое количество отзывов
    star: instructor.star || 4.5, // Тестовый рейтинг звёзд
    studentNumber: instructor.studentNumber || 1500, // Тестовое количество студентов
    course: instructor.course || 10, // Тестовое количество курсов
    social: instructor.social || [
      {
        link: "https://facebook.com",
        icon: "facebook",
      },
      {
        link: "https://twitter.com",
        icon: "twitter",
      },
      {
        link: "https://linkedin.com",
        icon: "linkedin",
      },
    ],
  };

  return (
    <div className="about-author border-0 pb--0 pt--0">
      <div className="section-title mb--30">
        <h4 className="rbt-title-style-3">Эксперт курса</h4>
      </div>
      <div className="media align-items-center">
        <div className="thumbnail">
          <Link href={`/profile/${instructor.id}`}>
            <Image
              src={instructor.img}
              width={250}
              height={250}
              alt="Фото эксперта"
            />
          </Link>
        </div>
        <div className="media-body">
          <div className="author-info">
            <h5 className="title">
              <Link
                className="hover-flip-item-wrapper"
                href={`/profile/${instructor.id}`}
              >
                {instructor.name}
              </Link>
            </h5>
            <span className="b3 subtitle">{instructor.type}</span>
            <ul className="rbt-meta mb--20 mt--10">
              <li>
                <i className="fa fa-star color-warning"></i>
                {defaultInstructorData.ratingNumber} отзывов
                <span className="rbt-badge-5 ml--5">
                  {defaultInstructorData.star} рейтинг
                </span>
              </li>
              <li>
                <i className="feather-users"></i> {defaultInstructorData.studentNumber} студентов
              </li>
              <li>
                <Link href="#">
                  <i className="feather-video"></i> {defaultInstructorData.course} курсов
                </Link>
              </li>
            </ul>
          </div>
          <div className="content">
            <p className="description">{instructor.desc}</p>

            <ul className="social-icon social-default icon-naked justify-content-start">
              {defaultInstructorData.social.map((social, index) => (
                <li key={index}>
                  <Link href={social.link}>
                    <i className={`feather-${social.icon}`}></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
