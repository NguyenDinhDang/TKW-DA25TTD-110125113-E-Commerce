import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nguyen & Tan | Cửa hàng Điện máy Trực tuyến",
  description:
    "Mua sắm điện thoại, máy tính xách tay, phụ kiện và thiết bị thông minh với trải nghiệm mua sắm tiện lợi.",
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
