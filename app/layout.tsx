import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space-grotesk" 
});

export const metadata: Metadata = {
  title: "Wise Cura | Immersive Aged-Care Training",
  description: "AR/VR-powered training platform helping Australia’s aged-care workforce upskill through immersive simulations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-wisecura-background text-wisecura-text overflow-x-hidden`}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
