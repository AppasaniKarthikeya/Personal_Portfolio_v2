import type { Metadata } from "next";
import { Anton, Hanken_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karthikeya Appasani — Software Engineer & AI Developer",
  description:
    "B.Tech IT student building full-stack and AI-powered applications using Java, Python, Next.js, Firebase, and cloud technologies. Portfolio showcasing CivicTrack, Path AI, and AgriAid.",
  keywords: [
    "Karthikeya Appasani",
    "portfolio",
    "software engineer",
    "AI developer",
    "Java",
    "Python",
    "Next.js",
    "Firebase",
    "PyTorch",
    "AWS",
    "full-stack",
  ],
  openGraph: {
    title: "Karthikeya Appasani | Portfolio",
    description: "Software Engineer & AI Developer — Systems. Code. Intelligence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${hankenGrotesk.variable} ${spaceMono.variable} dark`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
