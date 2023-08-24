import Link from "next/link";
import { FunctionComponent } from "react";
import { FaGithub } from "react-icons/fa";

const Header: FunctionComponent = () => {
  return (
    <header className="flex justify-between p-4 bg-lime-400">
      <div>
        <Link href="/" className="text-stone-600 font-bold text-3xl">
          mari2t Portfolio Site
        </Link>
      </div>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        <Link href="/" className="text-stone-600 font-bold text-xl">
          Portfolios
        </Link>
        <Link href="/skills" className="text-stone-600 font-bold text-xl">
          Skills
        </Link>
        <Link href="/about" className="text-stone-600 font-bold text-xl">
          About
        </Link>
        <Link
          href="https://github.com/mari2t"
          className="text-stone-600 font-bold text-xl"
        >
          <FaGithub />
        </Link>
      </div>
    </header>
  );
};

export default Header;
