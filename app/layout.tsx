import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leshya Bracaglia - Software Engineer",
  description: "Personal website and portfolio of Leshya Bracaglia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#001a00] text-white`}
      >
        <marquee>
          <p className="text-white">
            {`
            _________\n
    / ======= \
   / __________\
  | ___________ |
  | | -       | |
  | |         | |
  | |_________| |________________________
  \=____________/   Leshya Bracaglia      )
  / """"""""""" \                       /
 / ::::::::::::: \                  =D-'
(_________________)

            "`}
          </p>
        </marquee>
        <div>{children}</div>
      </body>
    </html>
  );
}
