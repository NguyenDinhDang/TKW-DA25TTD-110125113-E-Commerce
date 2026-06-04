import { Inter } from "next/font/google";
import "./css/style.css";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning={true}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
