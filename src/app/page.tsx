import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* コンテナ：中央寄せ＆左右余白（画面幅で増減） */}
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ===== Hero ===== */}
        <section className="relative mt-8 sm:mt-12">
          {/* 見出し：モバイルは通常フロー、md以上で画像の上に重ねる */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-['Mamelon'] font-bold tracking-tight mb-4 md:mb-0 md:absolute md:top-16 md:left-6 md:z-10">
            A treasure chest <br />
            filled with <br />
            Yuzuki&apos;s &quot;likes&quot;
          </h1>

          {/* 画像：モバイルは幅いっぱい、md以上は右寄せ＋最大幅750 */}
          <div className="flex md:justify-end">
            <Image
              src="/home.png"
              alt="Yuzuki illustration"
              width={750}
              height={420}
              priority
              className="h-auto w-full max-w-[750px]"
              sizes="(min-width:1024px) 750px, (min-width:640px) 60vw, 90vw"
            />
          </div>
        </section>

        {/* ===== Intro ===== */}
        <section className="mt-10 sm:mt-14">
          <h2 className="text-3xl sm:text-4xl font-['Mamelon'] tracking-tight text-center">
            About Content
          </h2>
          <p className="font-['Mamelon'] text-base md:text-xl mt-4 mx-auto max-w-prose leading-relaxed">
            柚月の作品ギャラリーへようこそ 🎨
            ここでは、わたしの大好きなイラストや工作を ✂️
            心をこめて紹介しています 💕
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

