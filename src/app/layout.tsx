import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Raleway } from "next/font/google";



export const metadata: Metadata = {
  title: 'EID Real Estate | Luxury Properties in Lebanon',
  description: 'Discover exclusive high-end properties in Lebanon with EID Real Estate. Experience luxury living in Beirut, Jounieh, Kaslik, and more. Your trusted partner for premium real estate.',
  keywords: ["luxury real estate, Lebanon, EID Real Estate, properties, villas, penthouses, apartments, Beirut, Jounieh, Kaslik, high-end properties, premium real estate, luxury living"],
  openGraph: {
    "title": "EID Real Estate | Luxury Properties in Lebanon",
    "description": "Discover exclusive high-end properties in Lebanon with EID Real Estate. Experience luxury living in Beirut, Jounieh, Kaslik, and more. Your trusted partner for premium real estate.",
    "url": "https://www.eidrealestate.com",
    "siteName": "EID Real Estate",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/umbrella-chair-around-outdoor-swimming-pool-resort-hotel-vacation-leisure_74190-14764.jpg",
        "alt": "Luxury villa at night with cinematic lighting"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "EID Real Estate | Luxury Properties in Lebanon",
    "description": "Discover exclusive high-end properties in Lebanon with EID Real Estate. Experience luxury living in Beirut, Jounieh, Kaslik, and more. Your trusted partner for premium real estate.",
    "images": [
      "http://img.b2bpic.net/free-photo/umbrella-chair-around-outdoor-swimming-pool-resort-hotel-vacation-leisure_74190-14764.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const raleway = Raleway({
  variable: "--font-raleway",  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${raleway.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
