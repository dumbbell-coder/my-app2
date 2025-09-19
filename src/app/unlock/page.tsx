"use client";

// src/app/unlock/page.tsx 先頭に追加
export const dynamic = 'force-dynamic';


import { useRouter, useSearchParams } from "next/navigation";
import { COOKIE_KEY, TOKEN } from "@/lib/auth";

export default function Unlock() {
  const router = useRouter();
  const sp = useSearchParams();
  const redirect = sp.get("redirect") || "/diary";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const pass = String(form.get("password") || "");
    if (pass === TOKEN) {
      // クッキーをセット（簡易）
      document.cookie = `${COOKIE_KEY}=${TOKEN}; path=/; max-age=2592000; samesite=lax`;
      router.replace(redirect);
    } else {
      alert("パスワードが違います。");
    }
  }

  return (
    <>
      <h1 className="text-2xl font-bold">Unlock</h1>
      <p className="mt-2 opacity-80 text-sm">家族用のパスワードを入力してください。</p>
      <form onSubmit={onSubmit} className="mt-6 max-w-sm grid gap-3">
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="rounded-xl border px-3 py-2 bg-transparent"
        />
        <button className="rounded-xl border px-3 py-2 hover:shadow">Unlock</button>
      </form>
    </>
  );
}
