export default function About() {
  return (
    <>
      <h1 className="font-['Mamelon'] text-2xl font-bold">About</h1>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="border p-6">
          <h3 className="font-['Mamelon'] font-bold">プロフィール</h3>
          <ul className="font-['Mamelon'] mt-2 list-disc ms-5 opacity-80 text-sm">
            <li>好き：読書、図工、博物館</li>
            <li>得意：コツコツ作ること</li>
          </ul>
        </div>
        <div className="border p-6">
          <h3 className="font-['Mamelon'] font-bold">近況</h3>
          <p className="font-['Mamelon'] mt-2 opacity-80 text-sm">最近作った作品をギャラリーに追加しました。</p>
        </div>
      </div>
    </>
  );
}
