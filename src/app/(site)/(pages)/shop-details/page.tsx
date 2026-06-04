import React from "react";
import ShopDetails from "@/components/ShopDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi tiết sản phẩm | TechMart E-commerce",
  description: "Xem chi tiết thông số kỹ thuật, đánh giá và thông tin bổ sung của sản phẩm.",
  // other metadata
};

const ShopDetailsPage = () => {
  return (
    <main>
      <ShopDetails />
    </main>
  );
};

export default ShopDetailsPage;
