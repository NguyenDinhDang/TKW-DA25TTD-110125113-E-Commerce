import Signin from "@/components/Auth/Signin";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Đăng nhập | TechMart E-commerce",
  description: "Đăng nhập vào tài khoản của bạn để tiếp tục mua sắm và quản lý đơn hàng.",
  // other metadata
};

const SigninPage = () => {
  return (
    <main>
      <Signin />
    </main>
  );
};

export default SigninPage;
