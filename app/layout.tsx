import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "fuckcoaches.com - Free AI Coaching. No Courses. No Gurus. No Bullshit.",
  description: "We're putting an end to paid coaching courses that make creators rich at the expense of their fans. Learn real AI, development, and creator growth systems — completely free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
