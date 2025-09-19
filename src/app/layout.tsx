import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";


const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata = {
  title: "柚月の作品ギャラリー",
  description: "柚月のホームページ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-dvh bg-[--background] text-[--foreground] antialiased`}>
      <Header />
        <main className="mx-auto max-w-5xl px-4">{children}</main>
      </body>
    </html>
  );
}
