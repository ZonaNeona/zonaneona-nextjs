"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Instructor = ({ instructor }) => {
  if (!instructor) {
    return <div>Информация об эксперте отсутствует.</div>;
  }

  return (
    <div className="about-author border-0 pb--0 pt--0">
      <div className="section-title mb--30">
        <h4 className="rbt-title-style-3">Эксперт курса</h4>
      </div>
      <div className="media align-items-center">
        <div className="thumbnail">
          <Image
            src={instructor.img}
            width={250}
            height={250}
            alt="Фото эксперта"
          />
        </div>
        <div className="media-body">
          <div className="author-info">
            <h5 className="title">{instructor.name}</h5>
            <span className="b3 subtitle">{instructor.type}</span>
          </div>
          <div className="content">
            <p className="description">{instructor.desc}</p>
            <ul className="social-icon social-default icon-naked justify-content-start">
              <li>
                <Link href={`tel:${instructor.contact}`}>
                  <i className="feather-phone"></i> Связаться
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
