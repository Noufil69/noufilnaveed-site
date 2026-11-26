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
  "Noufil Naveed is a backend developer in Karachi building APIs with Node.js, Express, PostgreSQL and Java Spring Boot, and the founder of Vantrix Software.";

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
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
    { media: "(prefers-color-scheme: light)", color: "#fafaf8" },
  ],
};

// Applies a saved Light/Dark choice before the page paints, so there is no flash.
const themeScript = `try{var t=localStorage.getItem("noufil-theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-svh">{children}</body>
    </html>
  );
}
