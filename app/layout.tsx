import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhushan's Portfolio",
  description: "Portfolio website for L1O-Bhushan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
        </style>
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
