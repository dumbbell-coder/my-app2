import Link from "next/link";
import Image from "next/image";

const nav = [
  { href: "/", label: "- Home" },
  { href: "/about", label: "- About" },
  { href: "/gallery", label: "- Gallery" },
  { href: "/diary", label: "- Diary 🔒" },
];

export default function Header() {
  return (
    <header className="m-10 max-w-6xl mx-auto">
      <nav className="flex">
        <Link href="/" className="items-center">
				<Image
          src="/logo.png"
          alt="Yuzuki"
          width={180}   // ロゴサイズはここで調整
          height={50}
          priority
          />
        </Link>
        <div className="ms-auto flex gap-8 text-2xl font-['Mamelon']">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:underline">
              {n.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
