import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ScrollProvider } from "@/components/ScrollProvider";

export const metadata: Metadata = {
  title: "Md Kawsar Ali | Full Stack Developer",
  description:
    "Portfolio of Md Kawsar Ali - CSE Graduate specializing in MERN, Next.js, GSAP, Framer Motion, PHP, and Laravel",
  keywords:
    "Full Stack Developer, MERN, Next.js, React, Node.js, MongoDB, Express, PHP, Laravel, GSAP, Framer Motion",
  authors: [{ name: "Md Kawsar Ali" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Md Kawsar Ali | Full Stack Developer",
    description: "Explore my portfolio of high-quality web projects",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="bg-dark-950 text-gray-100 font-sans"
        cz-shortcut-listen="true"
      >
        <ScrollProvider>
          <Navbar />
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}
