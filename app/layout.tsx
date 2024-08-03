import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import PlausibleProvider from "next-plausible";
import Globe from "@/components/Globe"; // Import the Globe component

let title = "KairosUI - AI Components";
let description = "Generate beautiful components using AI";
let url = "https://KairosUI.vercel.app/";
let ogimage = "light.ico";
let sitename = "KairosUI.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: "/light.ico",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: url,
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="KairoUI.vercel.app" />
      </head>
      <body className="bg-black min-w-screen min-h-screen antialiased py-2 selection:bg-purple-700/25 relative">
        <div className="absolute -z-50 inset-0">
          <Image
            src="/stars.svg"
            alt="stars"
            fill
            className="object-cover pointer-events-none invert-0"
          />
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <Globe />
        </div>
        <div className="isolate">{children}</div>
      </body>
    </html>
  );
}
