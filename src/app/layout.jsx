import React from 'react';
import Navbar from '@/components/portfolio/Navbar';
import "./globals.css";

export const metadata = {
  title: 'Portfolio',
  description: 'My Portfolio Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#1F1F1F]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}