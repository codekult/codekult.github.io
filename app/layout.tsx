import type { Metadata } from "next";
import { Libertinus_Mono, Geist } from "next/font/google";
import "./globals.css";

const libertinus = Libertinus_Mono({
  weight: "400",
  subsets: ["latin"],
});

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "codekult.dev",
  description:
    "Senior Full-Stack Engineer (10+ Years) | Building User-Centric High-Performance Web Applications with TypeScript, React and NodeJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${libertinus.className} ${geist.className}`}>
      <body className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col justify-center items-center max-w-1/2">
          {children}
        </div>
      </body>
    </html>
  );
}
