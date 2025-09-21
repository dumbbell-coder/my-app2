const items = [
  { id: 1, title: "4歳のときに描いた絵", caption: "2020年10月の作品", src: "/gallery/gallery01.jpg" },
  { id: 2, title: "理想の学校", caption: "小4夏休みの宿題で出品しようとして書いた作品", src: "/gallery/gallery03.JPG" },
  { id: 3, title: "折り紙", caption: "小4の9月、夜に折った作品", src: "/gallery/gallery02.png" },
  { id: 4, title: "ポケモン折り紙", caption: "夜に折っていた作品", src: "/gallery/gallery04.JPG" },
];

import Image from "next/image";

export default function Gallery() {
  return (
    <>
      <h1 className="font-['Mamelon'] text-2xl font-bold">Gallery</h1>
      <div className="my-18 grid gap-4 sm:grid-cols-3">
        {items.map((it) => (
          <figure key={it.id} className="border p-4">
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src={it.src}
                alt={it.title}
                fill         // 枠いっぱいに広げる
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3">
              <div className="font-['Mamelon'] ">{it.title}</div>
              <div className="font-['Mamelon'] text-sm opacity-80">{it.caption}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
