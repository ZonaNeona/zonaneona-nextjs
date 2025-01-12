import Link from "next/link";

const CategoryBanner = ({ category }) => {
  const categoryTitle = category?.category || "Все курсы";
  const courseCount = category?.length || 0;
  const categoryDescription =
    category?.desc ||
    "Ознакомьтесь с нашими курсами, которые помогут вам стать экспертом в своей области.";

  return (
    <>
      <div className="rbt-banner-content-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Хлебные крошки */}
              <ul className="page-list">
                <li className="rbt-breadcrumb-item">
                  <Link href="/">Главная</Link>
                </li>
                <li>
                  <div className="icon-right">
                    <i className="feather-chevron-right"></i>
                  </div>
                </li>
                <li className="rbt-breadcrumb-item active">{categoryTitle}</li>
              </ul>

              {/* Заголовок и количество курсов */}
              <div className="title-wrapper">
                <h1 className="title mb--0">{categoryTitle}</h1>
                <Link href="#" className="rbt-badge-2">
                  <div className="image">🎉</div>
                  {courseCount} Курс{courseCount === 1 ? "" : "ов"}
                </Link>
              </div>

              {/* Описание категории */}
              <p className="description">{categoryDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryBanner;
