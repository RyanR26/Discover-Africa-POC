import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from '@/components/Nav';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discover Africa Home Page",
  description: "Luxury African travel booking site",
  openGraph: {
    title: "Discover Africa Home Page",
    description: "Luxury African travel booking site",
    url: "https://discover-africa-af86d0g28-ryanr26s-projects.vercel.app/",
    siteName: "Discover Africa",
    images: [{
      url: ""
    }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="emerald">
      <body className={inter.className}>
        <Nav />
        <div className='container mx-auto px-4'>
          {children}
        </div>
      </body>
    </html>
  );
}
