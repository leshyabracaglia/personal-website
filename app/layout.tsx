import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "./lib/site";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - Software Engineer`,
    template: `%s - ${SITE_NAME}`,
  },
  description: "Personal website and portfolio of Leshya Bracaglia",
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#0d0d0d] font-ibm-plex-mono`}
      >
        <div className="hidden sm:block">
          <Marquee>
            <p className="text-terminal font-ibm-plex-mono whitespace-pre">
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
        </div>
        <div>{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
