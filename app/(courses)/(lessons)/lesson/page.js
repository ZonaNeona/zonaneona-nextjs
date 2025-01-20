"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const LessonLayout = ({ params }) => {
  const router = useRouter();
  const postId = params.lessonId;

  useEffect(() => {
    if (!lessonId) {
      router.push("/");
    }
  }, [lessonId, router]);

  return null;
};

export default LessonLayout;
