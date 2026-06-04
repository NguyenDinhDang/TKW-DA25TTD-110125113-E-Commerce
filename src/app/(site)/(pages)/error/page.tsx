import React from "react";
import Error from "@/components/Error";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Lỗi | Không tìm thấy trang",
  description: "Rất tiếc, trang bạn đang tìm kiếm không tồn tại hoặc đã xảy ra lỗi.",
  // other metadata
};

const ErrorPage = () => {
  return (
    <main>
      <Error />
    </main>
  );
};

export default ErrorPage;
