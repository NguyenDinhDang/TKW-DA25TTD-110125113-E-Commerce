import React from "react";
import Checkout from "@/components/Checkout";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Thanh toán | TechMart E-commerce",
  description: "Hoàn tất đơn đặt hàng của bạn nhanh chóng và bảo mật.",
  // other metadata
};

const CheckoutPage = () => {
  return (
    <main>
      <Checkout />
    </main>
  );
};

export default CheckoutPage;
