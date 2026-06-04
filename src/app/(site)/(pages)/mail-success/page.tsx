import React from "react";
import MailSuccess from "@/components/MailSuccess";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Gửi thư thành công | TechMart E-commerce",
  description: "Thư của bạn đã được gửi thành công. Chúng tôi sẽ phản hồi sớm nhất.",
  // other metadata
};

const MailSuccessPage = () => {
  return (
    <main>
      <MailSuccess />
    </main>
  );
};

export default MailSuccessPage;
