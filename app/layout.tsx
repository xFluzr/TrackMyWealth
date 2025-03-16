import type { Metadata } from "next";
import "./globals.css";
import { Inter, Montserrat, Merriweather } from "next/font/google";

const inter = Inter({ subsets: ["latin-ext"] });
const monsterrat = Montserrat({ subsets: ["latin-ext"] });
const merriweather = Merriweather({weight:"400", subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Track My Wealth",
  description: "App created for passionate inverstors to track their wealth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${merriweather.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
