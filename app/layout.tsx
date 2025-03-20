import type { Metadata } from "next";
import "./globals.css";
import { Inter, Montserrat, Merriweather } from "next/font/google";

const inter = Inter({ subsets: ["latin-ext"] });
const monsterrat = Montserrat({ subsets: ["latin-ext"] });
const merriweather = Merriweather({weight:"400", subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Wealthly",
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
        className={`${inter.className} ${merriweather.className} bg-slate-500 antialiased px-28 max-w-md:px-24 max-w-sm:px-2`}
      >
        {children}
      </body>
    </html>
  );
}
