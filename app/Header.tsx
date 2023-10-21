import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full border-b-2 pb-6 ">
      <Link href="/" className="flex">
        <h1 className="text-4xl tracking-tight">
          flex<b>fit</b>
        </h1>
      </Link>
    </header>
  );
}
