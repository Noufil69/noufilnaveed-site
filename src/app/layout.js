import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Noufil Naveed is a backend developer in Karachi building APIs with Node.js, Express, PostgreSQL and Java Spring Boot.";

export const metadata = {
  metadataBase: new URL("https://noufilnaveed.com"),
  title: "Noufil Naveed | Backend Developer",
  description,
  alternates: { canonical: "/" },
  authors: [{ name: "Noufil Naveed", url: "https://noufilnaveed.com" }],
  openGraph: {
    type: "profile",
    url: "/",
    siteName: "Noufil Naveed",
    title: "Noufil Naveed | Backend Developer",
    description,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noufil Naveed | Backend Developer",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-svh">{children}</body>
    </html>
  );
}
