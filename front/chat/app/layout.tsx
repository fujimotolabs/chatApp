import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/component/layout/header";
import Sidebar from "@/component/layout/sidebar";
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
          <Header />
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              bgcolor: "background.paper",
              borderRadius: 1,
            }}
          >
            <Sidebar />
            {children}
          </Box>
        </RecoilProvider>
      </body>
    </html>
  );
}
