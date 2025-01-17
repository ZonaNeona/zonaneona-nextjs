import Image from "next/image";
import Link from "next/link";

import { useAppContext } from "@/context/Context";

const CourseTab = ({ course, start, end }) => {
  const { toggle } = useAppContext();

  // Функция форматирования цены
  const formatPrice = (price) => {
    return Number(price).toLocaleString("ru-RU").replace(/\s/g, "'"); // Разделяем тысячи апострофом
  };

  return (
    <>
      <div
        className={`rbt-course-grid-column ${
          !toggle ? "active-list-view" : ""
        }`}
      >
        {course.slice(start, end).map((data, index) => (
          <div className="course-grid-3" key={index}>
            <div
              className={`rbt-card variation-01 rbt-hover ${
                !toggle ? "card-list-2" : ""
              }`}
            >
              {/* Картинка курса */}
              <div className="rbt-card-img">
                <Link href={`/course-details/${data.id}`}>
                  <Image
                    className="h-100"
                    src={data.courseImg}
                    width={362}
                    height={448}
                    alt="Card image"
                  />
                  {data.offPrice > 0 && (
                    <div className="rbt-badge-3 bg-white">
                      <span>-{data.discount}%</span>
                      <span>скидка</span>
                    </div>
                  )}
                </Link>
              </div>

              {/* Информация о курсе */}
              <div className="rbt-card-body">
                <div className="rbt-card-top">
                  <div className="rbt-review">
                    <div className="rating">
                       {[...Array(Math.floor(data.star || 0))].map(
                          (_, i) => (
                            <i className="fas fa-star" key={i}></i>
                          )
                        )}
                    </div>
                    <span className="rating-count">
                      ({data.review} Отзывов) |{" "}
                      <i className="feather-users"></i> {data.student} Учеников
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
                    {data.lesson} Уроков
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

                {/* Описание курса */}
                <p className="rbt-card-text">{data.desc}</p>

                {/* Информация об эксперте */}
                {data.courseInstructor && (
                  <div className="rbt-author-meta mb--10">
                    <div className="rbt-avater">
                      <Link href="#">
                        <Image
                          src={data.courseInstructor.img}
                          width={33}
                          height={33}
                          alt={data.courseInstructor.name}
                        />
                      </Link>
                    </div>
                    <div className="rbt-author-info">
                      Автор{" "}
                      <Link href={`/profile/${data.courseInstructor.id}`}>
                        {data.courseInstructor.name}
                      </Link>
                      <span>
                        {" "}
                        </span>
                        <span className="rbt-badge-5">
                          <i className="feather-check-circle"></i> Аккредитован
                        </span>
                      
                    </div>
                  </div>
                )}

                {/* Цена и кнопка */}
                <div className="rbt-card-bottom">
                  <div className="rbt-price">
                    <span className="current-price">
                      {formatPrice(data.price)} ₽
                    </span>
                    <span className="off-price">
                      {formatPrice(data.offPrice)} ₽
                    </span>
                  </div>
                  <Link
                    className="rbt-btn-link"
                    href={`/course-details/${data.id}`}
                  >
                    Подробнее<i className="feather-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CourseTab;
