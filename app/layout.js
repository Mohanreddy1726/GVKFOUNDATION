import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import AppShell from "./components/layout/AppShell";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "GVK Foundation — Beyond Support, Creating Real Change",
  description:
    "GVK Brothers Foundation is committed to supporting students and communities through impactful programs focused on education, health, empowerment, and development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="min-h-screen bg-white text-[#0d162a]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-white focus:text-[#0d162a] focus:px-4 focus:py-2 focus:rounded-full focus:shadow-lg focus:outline focus:outline-2 focus:outline-[#ff0008]"
        >
          Skip to content
        </a>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}