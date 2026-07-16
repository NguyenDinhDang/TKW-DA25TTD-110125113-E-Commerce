import React from "react";
import OrderCalendar from "@/components/Calender/orderCalender";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lịch giao hàng | TechMart E-commerce",
  description: "Lịch giao hàng và đặt lịch giao hàng của bạn.",
};

const DeliverySchedulePage = () => {
  return (
    <main>
      <section>
        <Breadcrumb title={"Lịch giao hàng"} pages={["Lịch giao hàng"]} />
      </section>
      
      <section className="py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <OrderCalendar />
        </div>
      </section>
    </main>
  );
};

export default DeliverySchedulePage;
