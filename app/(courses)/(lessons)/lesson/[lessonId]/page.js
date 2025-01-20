import BackToTop from "@/app/backToTop";
import Lesson from "../index";

export const metadata = {
  title: "Lesson - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
};

const LessonLayout = ({ params }) => {
  return (
    <>
      <Lesson getParams={params} />
      <BackToTop />
    </>
  );
};

export default LessonLayout;
