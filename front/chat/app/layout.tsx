import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Box from "@mui/material/Box";
import RecoilProvider from "./RecoilProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "fujimoto Chat",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <RecoilProvider>
          <div className="overflow-hidden w-screen h-screen">
            <Header />
          </div>
        </RecoilProvider>
        {children}
      </body>
    </html>
  );
}
