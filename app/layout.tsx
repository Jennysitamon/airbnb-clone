import type { Metadata } from "next";
import { Content, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import SearchModal from "./components/modals/SearchModal";
import LoginModal from "./components/modals/LoginModal";
import SignupModal from "./components/modals/SignupModal";
import AddPropertyModal from "./components/modals/AddPropertyModal";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DjandoBnb",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = (
      <p>Yo yopi</p>
  )

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        <div className="pt-32">
          {children}
        </div>

        <LoginModal />
        <SearchModal />
        <SignupModal />
        <AddPropertyModal />
      </body>
    </html>
  );
}
