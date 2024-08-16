import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white pt-2 sm:pt-4 lg:pt-8">
      <footer className="mx-auto max-w-screen-2xl px-2 md:px-4">
        <div className="flex flex-col items-center border-t pt-6">
          <nav className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
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
          </nav>
        </div>

        <div className="py-2 text-center text-sm text-gray-400">
          © 2024 - Present mari2t All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
