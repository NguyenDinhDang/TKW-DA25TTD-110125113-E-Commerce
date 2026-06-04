import React from "react";
import ShopWithSidebar from "@/components/ShopWithSidebar";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Cửa hàng | TechMart E-commerce",
  description: "Tìm kiếm và lọc các sản phẩm công nghệ chất lượng cao.",
  // other metadata
};

const ShopWithSidebarPage = () => {
  return (
    <main>
      <ShopWithSidebar />
    </main>
  );
};

export default ShopWithSidebarPage;
