import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* コンテナ：中央寄せ＆左右余白（画面幅で増減） */}
      <main className="md:px-8">

        {/* ===== Hero ===== */}
        <section className="relative mb-20 md:mb-10">
          {/* 見出し：モバイルは通常フロー、md以上で画像の上に重ねる */}
          <h1 className="text-2xl md:text-5xl font-['Mamelon'] font-bold tracking-tight mb-4 md:mb-0 absolute top-87 md:top-40 md:left-6 md:z-10">
            A treasure chest <br />
            filled with <br />
            Yuzuki&apos;s &quot;likes&quot;
          </h1>

          {/* 画像：モバイルは幅いっぱい、md以上は右寄せ＋最大幅750 */}
          <div className="-mx-4 flex md:justify-end">
            <picture>
            <source media="(min-width: 768px)" srcSet="/home.png" />
            <img
              src="/home-s.png"
              alt="Yuzuki illustration"
              className="w-full h-auto md:w-4/5 md:ml-auto"
            />
            </picture>
          </div>
        </section>

        {/* ===== Intro ===== */}
        <section className="bg-gray-100 -mx-4 py-10 px-5">
          <h2 className="text-xl sm:text-4xl font-['Mamelon'] tracking-tight">
            About Content
          </h2>
          <p className="font-['Mamelon'] text-base md:text-xl mt-4 mx-auto max-w-prose leading-relaxed">
            柚月の作品ギャラリーへようこそ 🎨<br />
            わたしの大好きなイラストや工作を ✂️<br />
            心をこめて紹介しています 💕<br />
          </p>
        </section>

        {/* ===== Cards ===== */}
        <section className="mt-12 sm:mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <Link
            href="/about"
            className="border rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold">About →</h3>
            <p className="mt-2 opacity-80">プロフィールと近況。</p>
          </Link>

          <Link
            href="/gallery"
            className="border rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold">Gallery →</h3>
            <p className="mt-2 opacity-80">作品・写真のギャラリー。</p>
          </Link>

          <Link
            href="/diary"
            className="border rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold">Diary 🔒 →</h3>
            <p className="mt-2 opacity-80">家族だけのページ（鍵付き）。</p>
          </Link>
        </section>
      </main>
    </>
  );
}

