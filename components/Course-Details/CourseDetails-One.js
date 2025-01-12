import Content from "./Course-Sections/Content";
import CourseBanner from "./Course-Sections/Course-Banner";
import CourseMenu from "./Course-Sections/Course-Menu";
import Featured from "./Course-Sections/Featured";
import Instructor from "./Course-Sections/Instructor";
import Overview from "./Course-Sections/Overview";
import RelatedCourse from "./Course-Sections/RelatedCourse";
import Requirements from "./Course-Sections/Requirements";
import Review from "./Course-Sections/Review";
import Video from "./Course-Sections/Video";

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
          {/* Баннер курса */}
          {checkMatchCourses.courseImg && (
            <div className="rbt-course-feature-box rbt-shadow-box thumbnail">
              <CourseBanner bannerImg={checkMatchCourses.courseImg} />
            </div>
          )}

          {/* Меню страницы */}
          <div className="rbt-inner-onepage-navigation sticky-top mt--30">
            <CourseMenu />
          </div>

          {/* Описание курса */}
          {checkMatchCourses.courseOverview && (
            <div className="course-overview mt--30">
              {checkMatchCourses.courseOverview.map((data, index) => (
                <Overview {...data} key={index} checkMatchCourses={data} />
              ))}
            </div>
          )}

          {/* Содержимое курса */}
          {checkMatchCourses.courseContent && (
            <div
              className="course-content rbt-shadow-box coursecontent-wrapper mt--30"
              id="coursecontent"
            >
              {checkMatchCourses.courseContent.map((data, index) => (
                <Content {...data} key={index} checkMatchCourses={data} />
              ))}
            </div>
          )}

          {/* Требования курса */}
          {checkMatchCourses.courseRequirement && (
            <div
              className="rbt-course-feature-box rbt-shadow-box details-wrapper mt--30"
              id="details"
            >
              <div className="row g-5">
                {checkMatchCourses.courseRequirement.map((data, index) => (
                  <Requirements
                    {...data}
                    key={index}
                    checkMatchCourses={data}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Инструктор */}
          {checkMatchCourses.courseInstructor && (
            <div
              className="rbt-instructor rbt-shadow-box intructor-wrapper mt--30"
              id="instructor"
            >
              <Instructor checkMatchCourses={checkMatchCourses.courseInstructor} />
            </div>
          )}

          {/* Отзывы */}
          <div
            className="rbt-review-wrapper rbt-shadow-box review-wrapper mt--30"
            id="review"
          >
            <Review />
          </div>

          {/* Избранные отзывы */}
          {checkMatchCourses.featuredReview && (
            <div className="rbt-featured-reviews mt--30">
              {checkMatchCourses.featuredReview.map((data, index) => (
                <Featured {...data} key={index} coursesFeatured={data} />
              ))}
            </div>
          )}
        </div>

        {/* Связанные курсы */}
        {checkMatchCourses.relatedCourse && (
          <div className="related-course mt--60">
            {checkMatchCourses.relatedCourse.map((data, index) => (
              <RelatedCourse {...data} key={index} checkMatchCourses={data} />
            ))}
          </div>
        )}
      </div>

      {/* Боковая панель */}
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
