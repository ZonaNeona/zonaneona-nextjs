import Image from "next/image";
import { usePathname, useParams } from "next/navigation";

import CourseBreadcrumb from "./Course-Breadcrumb";
import CourseBreadcrumbTwo from "./CourseBreadcrumb-Two";

import bgImage from "../../../public/images/bg/bg-image-10.jpg";

const CourseHead = ({ checkMatch }) => {
  const pathname = usePathname();
  const path = useParams();

  // Проверка наличия данных
  if (!checkMatch) {
    return (
      <div className="container">
        <div className="row">
          <p className="text-center">Информация о курсе отсутствует.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {pathname === `/course-detail-2/${path.courseId}` ? (
        <div className="container">
          <div className="row">
            <CourseBreadcrumbTwo getMatchCourse={checkMatch} />
          </div>
        </div>
      ) : (
        <>
          <div className="breadcrumb-inner breadcrumb-dark">
            <Image src={bgImage} alt="Education Images" />
          </div>
          <div className="container">
            <div className="row">
              <CourseBreadcrumb getMatchCourse={checkMatch} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CourseHead;
