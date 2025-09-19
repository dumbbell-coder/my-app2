import Image from "next/image";

export default function Home() {
  return (
    <>
<div className="relative">
  <h1 className="absolute top-40 left-5 text-4xl font-['Mamelon'] font-bold tracking-tight z-10">
    A treasure chest <br />
    filled with <br />
    Yuzuki&apos;s &quot;likes&quot;
  </h1>
  <div className="flex justify-end me-5">
    <Image
      src="/home.png"
      alt="Yuzuki illustration"
      width={750}
      height={100}
      priority
    />
  </div>
</div>
      <h1 className="text-5xl font-['Mamelon'] tracking-tight text-center mt-15">About Content</h1>
      <p className="font-['Mamelon'] text-xl mx-20 mt-5">柚月の作品ギャラリーへようこそ 🎨
  ここでは、わたしの大好きなイラストや工作を ✂️
  心をこめて紹介しています 💕</p>
      <section className="mt-20 grid gap-4 sm:grid-cols-2">
        <a href="/about" className=" border p-6 hover:shadow">
          <h2 className="text-lg font-semibold">About →</h2>
          <p className="mt-2 opacity-80">プロフィールと近況。</p>
        </a>
        <a href="/gallery" className=" border p-6 hover:shadow">
          <h2 className="text-lg font-semibold">Gallery →</h2>
          <p className="mt-2 opacity-80">作品・写真のギャラリー。</p>
        </a>
        <a href="/diary" className=" border p-6 hover:shadow">
          <h2 className="text-lg font-semibold">Diary 🔒 →</h2>
          <p className="mt-2 opacity-80">家族だけのページ（鍵付き）。</p>
        </a>
      </section>
    </>
  );
}
