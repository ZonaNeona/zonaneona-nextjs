import Image from "next/image";
import Link from "next/link";

const Card = ({ courses }) => {
  return (
    <>
      {courses &&
        courses.map((data, index) => (
          <div
            className="col-lg-4 col-md-6 mb-4"
            data-sal-delay="150"
            data-sal="slide-up"
            data-sal-duration="800"
            key={index}
          >
            <div className="rbt-card variation-01 rbt-hover">
              {/* Картинка курса */}
              <div className="rbt-card-img">
                <Link href={`/course-details/${data.id}`}>
                  <Image
                    src={data.courseImg}
                    width={355}
                    height={244}
                    alt={data.courseTitle}
                  />
                  {data.discount > 0 && (
                    <div className="rbt-badge-3 bg-white">
                      <span>-{data.discount}%</span>
                      <span>скидка</span>
                    </div>
                  )}
                </Link>
              </div>

              {/* Содержимое карточки */}
              <div className="rbt-card-body">
                <div className="rbt-card-top">
                  {/* Рейтинг */}
                  <div className="rbt-review">
                    <div className="rating">
                      {[...Array(Math.round(data.star))].map((_, i) => (
                        <i className="fas fa-star" key={i}></i>
                      ))}
                    </div>
                    <span className="rating-count">
                      ({data.review} Reviews)
                    </span>
                  </div>
                  <div className="rbt-bookmark-btn">
                    <Link className="rbt-round-btn" title="Bookmark" href="#">
                      <i className="feather-bookmark"></i>
                    </Link>
                  </div>
                </div>

                {/* Название курса */}
                <h4 className="rbt-card-title">
                  <Link href={`/course-details/${data.id}`}>
                    {data.courseTitle}
                  </Link>
                </h4>

                {/* Метаданные курса */}
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

                {/* Эксперт */}
                {data.courseInstructor && (
                  <div className="rbt-author-meta mb--10">
                    <div className="rbt-avater">
                      <Link href={`/profile/${data.courseInstructor.id}`}>
                        <Image
                          src={data.courseInstructor.img}
                          width={33}
                          height={33}
                          alt={data.courseInstructor.name}
                        />
                      </Link>
                    </div>
                    <div className="rbt-author-info">
                      By{" "}
                      <Link href={`/profile/${data.courseInstructor.id}`}>
                        {data.courseInstructor.name}
                      </Link>
                    </div>
                  </div>
                )}

                {/* Цена и кнопки */}
                <div className="rbt-card-bottom">
                  <div className="rbt-price">
                    <span className="current-price">{data.price}</span>
                    {data.offPrice && (
                      <span className="off-price">{data.offPrice}</span>
                    )}
                  </div>
                  <Link
                    className="rbt-btn-link"
                    href={`/course-details/${data.id}`}
                  >
                    Подробнее
                    <i className="feather-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Card;
