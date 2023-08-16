import Link from "next/link";
import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  return (
    <header className="flex justify-between p-4 bg-lime-400">
      <div>
        <Link href="/" className="text-stone-600 font-bold text-3xl">
          mari2t Portfolio Site
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link href="/" className="text-stone-600 font-bold text-xl">
          Portfolios
        </Link>
        <Link href="/skills" className="text-stone-600 font-bold text-xl">
          Skills
        </Link>
        <Link href="/about" className="text-stone-600 font-bold text-xl">
          About
        </Link>
      </div>
    </header>
  );
};

export default Header;
