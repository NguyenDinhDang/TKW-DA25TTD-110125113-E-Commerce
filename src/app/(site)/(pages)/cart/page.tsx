import React from "react";
import Cart from "@/components/Cart";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Giỏ hàng | TechMart E-commerce",
  description: "Xem và quản lý các sản phẩm trong giỏ hàng của bạn.",
  // other metadata
};

const CartPage = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export default CartPage;
