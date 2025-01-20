"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const LessonLayout = ({ params }) => {
  const router = useRouter();
  const lessonId = params.lessonId; // Убедитесь, что это правильно используется

  useEffect(() => {
    if (!lessonId) {
      router.push("/");  // Перенаправляем на главную страницу, если нет урока
    }
  }, [lessonId, router]);

  return null;  // Страница ничего не рендерит, просто проверка параметра
};

export default LessonLayout;
