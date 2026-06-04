import Signup from "@/components/Auth/Signup";
import React from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Đăng ký tài khoản | TechMart E-commerce",
  description: "Tạo tài khoản mới để nhận nhiều ưu đãi và quản lý mua sắm dễ dàng hơn.",
  // other metadata
};

const SignupPage = () => {
  return (
    <main>
      <Signup />
    </main>
  );
};

export default SignupPage;
