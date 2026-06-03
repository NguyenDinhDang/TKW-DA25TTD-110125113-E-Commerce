"use client";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "../css/style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import QuickViewModal from "@/components/Common/QuickViewModal";
import CartSidebarModal from "@/components/Common/CartSidebarModal";
import PreviewSliderModal from "@/components/Common/PreviewSlider";

import ScrollToTop from "@/components/Common/ScrollToTop";
import PreLoader from "@/components/Common/PreLoader";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        {loading ? (
          <PreLoader />
        ) : (
          <>
            <Header />
            {children}
            <QuickViewModal />
            <CartSidebarModal />
            <PreviewSliderModal />
            <ScrollToTop />
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
