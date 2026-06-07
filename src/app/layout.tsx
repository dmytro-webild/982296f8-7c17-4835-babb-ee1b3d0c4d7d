import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Modern Atelier | Timeless Turkish Fashion',
  description: 'Discover minimalist, high-quality fashion for the contemporary woman. Shop elegant designs and curated collections from Modern Atelier, a premium Turkish brand.',
  keywords: ["turkish fashion, minimalist style, luxury clothing, contemporary women's wear, ethical fashion, modern atelier, high quality apparel"],
  openGraph: {
    "title": "Modern Atelier | Timeless Turkish Fashion",
    "description": "Discover minimalist, high-quality fashion for the contemporary woman. Shop elegant designs and curated collections from Modern Atelier, a premium Turkish brand.",
    "url": "/",
    "siteName": "Modern Atelier",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/beautiful-brunette-woman-evening-dress-posing_176420-3747.jpg",
        "alt": "Woman in elegant minimalist fashion"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Modern Atelier | Timeless Turkish Fashion",
    "description": "Discover minimalist, high-quality fashion for the contemporary woman. Shop elegant designs and curated collections from Modern Atelier, a premium Turkish brand.",
    "images": [
      "http://img.b2bpic.net/free-photo/beautiful-brunette-woman-evening-dress-posing_176420-3747.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} ${dmSans.variable} antialiased`}>
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
