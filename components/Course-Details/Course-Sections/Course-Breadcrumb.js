import Image from "next/image";
import Link from "next/link";

const CourseBreadcrumb = ({ getMatchCourse }) => {
  const instructor = getMatchCourse.courseInstructor;

  return (
    <>
      <div className="col-lg-8">
        <div className="content text-start">
          <ul className="page-list">
            <li className="rbt-breadcrumb-item">
              <Link href="/">Главная</Link>
            </li>
            <li>
              <div className="icon-right">
                <i className="feather-chevron-right"></i>
              </div>
            </li>
            <li className="rbt-breadcrumb-item active">
              {getMatchCourse.category}
            </li>
          </ul>
          <h2 className="title">{getMatchCourse.courseTitle}</h2>
          <p className="description">{getMatchCourse.desc}</p>

          <div className="d-flex align-items-center mb--20 flex-wrap rbt-course-details-feature">
            <div className="feature-sin best-seller-badge">
              <span className="rbt-badge-2">
                <span className="image">
                  {getMatchCourse.awardImg && (
                    <Image
                      src={getMatchCourse.awardImg}
                      width={30}
                      height={30}
                      alt="Best Seller Icon"
                    />
                  )}
                </span>
                {getMatchCourse.sellsType}
              </span>
            </div>
            <div className="feature-sin rating">
              <Link href="#review">{getMatchCourse.star}</Link>
              {[...Array(Math.floor(Number(getMatchCourse?.star) || 0))].map((_, i) => (
                <i className="fas fa-star" key={i}></i>
              ))}
            </div>

            <div className="feature-sin total-rating">
              <Link className="rbt-badge-4" href="#">
                <i className="feather-check-circle"></i> Сертификат
              </Link>
            </div>

            <div className="feature-sin total-rating">
              <Link className="rbt-badge-4" href="#">
                <i className="feather-award"></i> Партнерство
              </Link>
            </div>
          </div>

          {/* Instructor Information */}
          <div className="rbt-instructor-info mt--30">
            <div className="rbt-avater">
              {instructor.img && (
                <Image
                  width={60}
                  height={60}
                  src={instructor.img}
                  alt={instructor.name}
                  className="rounded-circle"
                />
              )}
            </div>
            <div className="rbt-instructor-details">
              <h4 className="title">{instructor.name}</h4>
              <p className="type">{instructor.type}</p>
              <p className="desc">{instructor.desc}</p>
              <Link
                href={`tel:${instructor.contact}`}
                className="rbt-btn btn-border btn-sm mt--10"
              >
                Связаться: {instructor.contact}
              </Link>
            </div>
          </div>

          <ul className="rbt-meta mt--20">
            <li>
              <i className="feather-calendar"></i>Last updated{" "}
              {getMatchCourse.date}
            </li>
            <li>
              <i className="feather-globe"></i>
              {getMatchCourse.language}
            </li>
            <li>
              <i className="feather-award"></i> {getMatchCourse.courseAward}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CourseBreadcrumb;
