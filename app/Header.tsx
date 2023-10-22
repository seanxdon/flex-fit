import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full border-b-2 pb-6 py-5 px-10">
      <Link href="/" className="flex">
        <h1 className="text-4xl tracking-tight text-cyan-100">
          <b>flexfit</b>.ai
        </h1>
      </Link>
    </header>
  );
}
