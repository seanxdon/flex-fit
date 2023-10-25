import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between align-center w-full border-b-2 pb-6 p-5">
      <Link href="/">
        <h1 className="text-3xl tracking-tight text-cyan-200">
        <span><b>flexfit</b>.ai</span>
        </h1>
      </Link>
      <Link href="/my-plan">
        <h1 className="text-3xl tracking-tight text-cyan-200">
        <span>My Plan</span>
        </h1>
      </Link>
    </header>
  );
}
