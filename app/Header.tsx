import Link from "next/link";

export default function Header() {
  return (
    <header className="flex w-10/12 border-b-2 pb-6 py-5">
      <Link href="/" className="flex">
        <h1 className="text-3xl tracking-tight text-cyan-100">
        <span><b>flexfit</b>.ai</span>
        </h1>
      </Link>
    </header>
  );
}
