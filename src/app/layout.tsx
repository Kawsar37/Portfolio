import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MD. Kawsar Ali | Full Stack Developer",
  description: "Portfolio of MD. Kawsar Ali, Full Stack Developer specializing in React.js, Next.js, TypeScript, Node.js, and competitive programming. ICPC Asia Regionalist.",
  icons: {
    icon: "/asset/favicon.ico",
    apple: "/asset/favicon.ico",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "MD. Kawsar Ali | Full Stack Developer",
    description: "Full Stack Developer specializing in React.js, Next.js, TypeScript, Node.js, and competitive programming. ICPC Asia Regionalist.",
    url: "https://kawsar.engineer",
    siteName: "MD. Kawsar Ali Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MD. Kawsar Ali | Full Stack Developer",
    description: "Full Stack Developer specializing in React.js, Next.js, TypeScript, Node.js, and competitive programming. ICPC Asia Regionalist.",
  },
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
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className={`${outfit.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-background text-foreground">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
