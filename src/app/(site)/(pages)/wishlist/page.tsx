import React from "react";
import { Wishlist } from "@/components/Wishlist";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh sách yêu thích | TechMart E-commerce",
  description: "Xem và quản lý các sản phẩm bạn đã lưu để mua sau.",
  // other metadata
};

const WishlistPage = () => {
  return (
    <main>
      <Wishlist />
    </main>
  );
};

export default WishlistPage;
