import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: {
    default: "Joseph Obasi",
    template: "%s | Joseph Obasi",
  },
  description: "Joseph Obasi",

  keywords: [
    "Joseph Obasi",
    "Frontend Developer",
    "Web Developer",
    "Next.js Portfolio",
    "UI Engineer",
    "obasi joseph",
    "obasi joseph ukoha",
    "jovo",
    "Jovo",
    "jovo_dev",
    "Jovo_dev",
  ],

  authors: [{ name: "Joseph Obasi" }],
  creator: "Joseph Obasi",
  publisher: "Joseph Obasi",

  metadataBase: new URL("https://jovo.dev"),

  robots: {
    index: true,
    follow: true,
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
        className={`${dmSans.variable} antialiased`}
      >
       
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
