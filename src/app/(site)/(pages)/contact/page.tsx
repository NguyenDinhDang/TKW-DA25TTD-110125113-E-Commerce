import Contact from "@/components/Contact";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Liên hệ | TechMart E-commerce",
  description: "Liên hệ với chúng tôi để được tư vấn và hỗ trợ tốt nhất.",
  // other metadata
};

const ContactPage = () => {
  return (
    <main>
      <Contact />
    </main>
  );
};

export default ContactPage;
