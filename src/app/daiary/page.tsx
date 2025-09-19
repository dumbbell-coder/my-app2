export default function Diary() {
  return (
    <>
      <h1 className="text-2xl font-['Mamelon'] font-bold">Diary 🔒</h1>
      <p className="font-['Mamelon'] mt-3 opacity-80 text-sm">
        ここは家族だけのページです。パスワード解除済みの端末でのみ表示されます。
      </p>

      <div className="font-['Mamelon'] mt-6 grid gap-4">
        <article className="rounded-2xl border p-6">
          <h3 className="font-semibold">2025-09-19</h3>
          <p className="mt-2 opacity-80 text-sm">きょうの出来事メモ……</p>
        </article>
      </div>
    </>
  );
}
