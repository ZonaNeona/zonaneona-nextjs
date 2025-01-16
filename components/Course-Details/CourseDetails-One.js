"use client";

import Content from "./Course-Sections/Content";
import CourseBanner from "./Course-Sections/Course-Banner";
import CourseMenu from "./Course-Sections/Course-Menu";
import Featured from "./Course-Sections/Featured";
import Instructor from "./Course-Sections/Instructor";
import Overview from "./Course-Sections/Overview";
import RelatedCourse from "./Course-Sections/RelatedCourse";
import BonusSection from "./Course-Sections/BonusSection";
import Requirements from "./Course-Sections/Requirements";
import Review from "./Course-Sections/Review";
import Video from "./Course-Sections/Viedo";

const CourseDetailsOne = ({ checkMatchCourses }) => {
  if (!checkMatchCourses) {
    return (
      <div className="col-lg-12">
        <p className="text-center">Информация о курсе отсутствует.</p>
      </div>
    );
  }

  return (
    <>
      <div className="col-lg-8">
        <div className="course-details-content">
          {checkMatchCourses.courseImg && (
            <div className="rbt-course-feature-box rbt-shadow-box thumbnail">
              <CourseBanner bannerImg={checkMatchCourses.courseImg} />
            </div>
          )}

          <div className="rbt-inner-onepage-navigation sticky-top mt--30">
            <CourseMenu />
          </div>

          {checkMatchCourses.courseOverview && (
            <div className="course-overview mt--30">
              {checkMatchCourses.courseOverview.map((overview, index) => (
                <Overview key={index} checkMatchCourses={overview} />
              ))}
            </div>
          )}

          {checkMatchCourses.modules && (
            <div
              className="course-content rbt-shadow-box coursecontent-wrapper mt--30"
              id="coursecontent"
            >
              <Content modules={checkMatchCourses.modules} />
            </div>
          )}


          {checkMatchCourses.courseRequirement && (
            <div
              className="rbt-course-feature-box rbt-shadow-box details-wrapper mt--30"
              id="details"
            >
              <div className="row g-5">
                {checkMatchCourses.courseRequirement.map((req, index) => (
                  <Requirements key={index} checkMatchCourses={req} />
                ))}
              </div>
            </div>
          )}

          {checkMatchCourses.courseInstructor && (
            <div
              className="rbt-instructor rbt-shadow-box intructor-wrapper mt--30"
              id="instructor"
            >
              <Instructor instructor={checkMatchCourses.courseInstructor} />
            </div>
          )}

          {checkMatchCourses.featuredReview && (
            <div className="rbt-featured-reviews mt--30">
              {checkMatchCourses.featuredReview.map((review, index) => (
                <Featured key={index} coursesFeatured={review} />
              ))}
            </div>
          )}
        </div>

        {checkMatchCourses && checkMatchCourses.bonuses && (
        <div className="container mt--60">
            <BonusSection bonuses={checkMatchCourses.bonuses} />
        </div>
        )}

      {/*  {checkMatchCourses.relatedCourse && (
          <div className="related-course mt--60">
            <SimilarCourses checkMatchCourses={checkMatchCourses.relatedCourse} />
          </div>
        )} */}
        
      </div>

      <div className="col-lg-4">
        <div className="course-sidebar sticky-top rbt-shadow-box course-sidebar-top rbt-gradient-border">
          <div className="inner">
            <Video checkMatchCourses={checkMatchCourses} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetailsOne;
