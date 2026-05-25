import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TechMart | Online Electronics Store",
  description:
    "Shop phones, laptops, accessories, and smart devices with a clean e-commerce experience.",
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
