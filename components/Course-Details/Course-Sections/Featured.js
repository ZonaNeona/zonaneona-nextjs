"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Featured = ({ featuredReview }) => {
  const [toggle, setToggle] = useState(false);

  if (!featuredReview || !featuredReview.length) {
    return <div>Отзывы отсутствуют.</div>;
  }

  return (
    <>
      <div  id="review"
        className={`about-author-list rbt-shadow-box featured-wrapper mt--30 has-show-more ${
          toggle ? "active" : ""
        }`}
      >
        <div className="section-title">
          <h4 className="rbt-title-style-3">{featuredReview[0].title}</h4>
        </div>
        <div className="has-show-more-inner-content rbt-featured-review-list-wrapper">
          {featuredReview[0].body.map((user, innerIndex) => (
            <div className="rbt-course-review about-author" key={innerIndex}>
              <div className="media">
                <div className="thumbnail">
                  <Link href="#">
                    <Image
                      src={user.userImg}
                      width={105}
                      height={105}
                      alt="Author Images"
                    />
                  </Link>
                </div>
                <div className="media-body">
                  <div className="author-info">
                    <h5 className="title">
                      <Link className="hover-flip-item-wrapper" href="#">
                        {user.userName}
                      </Link>
                    </h5>
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <Link href="#" key={i}>
                          <i className="fa fa-star"></i>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="content">
                    <p className="description">{user.desc}</p>
                    <ul className="social-icon social-default transparent-with-border justify-content-start">
                      <li>
                        <Link href="#">
                          <i className="feather-thumbs-up"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="feather-thumbs-down"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`rbt-show-more-btn ${toggle ? "active" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          Show More
        </div>
      </div>
    </>
  );
};

export default Featured;
