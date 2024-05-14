import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";

const primaryFont = Poppins({ 
  weight: ['300', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap', 
});

export const metadata: Metadata = {
  title: "Sondbase the best music player",
  description: "Step into the world of Soundbase, a music player web application designed to elevate your listening experience to new heights. With its sleek and intuitive interface, Soundbase seamlessly blends style with functionality, offering a music experience like no other.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={primaryFont.className}>{children}</body>
    </html>
  );
}
