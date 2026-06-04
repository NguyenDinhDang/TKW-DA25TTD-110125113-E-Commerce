import MyAccount from "@/components/MyAccount";
import React from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tài khoản của tôi | TechMart E-commerce",
  description: "Quản lý thông tin cá nhân, địa chỉ giao hàng và lịch sử đơn hàng.",
  // other metadata
};

const MyAccountPage = () => {
  return (
    <main>
      <MyAccount />
    </main>
  );
};

export default MyAccountPage;
