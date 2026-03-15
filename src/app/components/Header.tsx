import Link from "next/link";

export function Header() {

  return (
    <Link href="/">
      <div className="header_title">
        <h1>Jérémy Bocquet</h1>
      </div>
    </Link>
  );
}
