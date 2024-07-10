import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={
          inter.className + " max-lg:w-[375px]  lg:max-w-[1440px] mx-auto"
        }
      >
        <header className="">
          <Header />
        </header>
        <div>{children}</div>
      </body>
    </html>
  );
}
