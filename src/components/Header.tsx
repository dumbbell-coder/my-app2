// app/components/Header.tsx など
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const nav = [
  { href: "/", label: "- Home" },
  { href: "/about", label: "- About" },
  { href: "/gallery", label: "- Gallery" },
  { href: "/diary", label: "- Diary 🔒" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      {/* コンテナ幅・左右余白（端末幅に応じて） */}
      <div className="fixed top-0 left-0 w-full bg-white z-50 md:static">
        <nav className="flex items-center justify-between px-4 py-3">
          {/* ロゴ */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Yuzuki"
              width={180}
              height={50}
              className="h-13 w-auto sm:h-25" /* 端末でロゴサイズ少し可変 */
              priority
            />
          </Link>

          {/* デスクトップナビ（md以上で表示） */}
          <div className="ml-auto hidden md:flex items-center gap-8 text-lg md:text-xl font-['Mamelon']">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="hover:underline">
                {n.label}
              </Link>
            ))}
          </div>

          {/* モバイルのハンバーガー（md未満で表示） */}
          <button
            className="ml-auto inline-flex items-center justify-center rounded-md border px-3 py-2 md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {/* シンプルなハンバーガーアイコン（SVG） */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* モバイルドロワー（md未満で開閉） */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
            open ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pb-6 pt-2 text-lg font-['Mamelon']">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="hover:underline"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
