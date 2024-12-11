import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import React from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Blank Project",
  description: "A blank project for Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
