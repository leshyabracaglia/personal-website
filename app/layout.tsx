import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const Marquee = "marquee" as unknown as React.ElementType;

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#c8ccc0] font-ibm-plex-mono`}
      >
        <Marquee>
          <p className="text-black font-ibm-plex-mono whitespace-pre">
            {String.raw`
            _________
           / ======= \
          / __________\
         | ___________ |
         | | -       | |
         | |         | |
         | |_________| |________________________
         \=____________/   Leshya Bracaglia      )
         / """"""""""" \                        /
        / ::::::::::::: \                   =D-'
       (_________________)
      `}
          </p>
        </Marquee>
        <div>{children}</div>
      </body>
    </html>
  );
}
