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
              <Link href="#review">{getMatchCourse.star}</Link>
            <Link href="#">
                <i className="fa fa-star"></i>
              </Link>
              </span>
              <span className="rating-count">
                ({getMatchCourse.review} Отзывов) |{" "}
                <i className="feather-users"></i> {getMatchCourse.student} Учеников
              </span>
       {/*         <span className="rbt-badge-2">
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
              </span> */}
            </div>
            <div className="feature-sin rating">
              <Link href="#review">{getMatchCourse.star}</Link>
            <Link href="#">
                <i className="fa fa-star"></i>
              </Link>
              <Link href="#">
                <i className="fa fa-star"></i>
              </Link>
              <Link href="#">
                <i className="fa fa-star"></i>
              </Link>
              <Link href="#">
                <i className="fa fa-star"></i>
              </Link>
              <Link href="#">
                <i className="fa fa-star"></i>
              </Link>
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
           <div className="rbt-author-meta mb--20">
            <div className="rbt-avater">
              {instructor.img && (
                <Image
                  width={40}
                  height={40}
                  src={instructor.img}
                  alt={instructor.name}
                  className="rounded-circle"
                />
              )}
            </div>
            <div className="rbt-author-info">
              Автор{" "}
              <Link href={`/profile/${getMatchCourse.courseInstructor.id}`}>
                {getMatchCourse.courseInstructor.name}
              </Link>{" "}
              - {getMatchCourse.courseInstructor.type}
            </div>

          </div>

          <ul className="rbt-meta mt--20">
            <li>
              <i className="feather-calendar"></i>Обновлен{" "}
              {getMatchCourse.date}
            </li>
            <li>
             <i className="feather-book"></i> {getMatchCourse.lesson} Учеников
            </li>
            <li>
              <i className="feather-check-square"></i> 7 Тестов
            </li>
            <li>
              <i className="feather-edit"></i> 2 Задания
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CourseBreadcrumb;
