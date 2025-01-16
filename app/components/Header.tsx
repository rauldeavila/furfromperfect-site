import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b-[1px] border-[#fafafa] bg-[#333333] p-4 shadow-[0_4px_0_0_#333333]">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-4xl font-bold retro-text text-[#f5f5f5]"
        >
          furfromperfect
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/blog"
                className="text-xl hover:text-[#ff6b6b] transition-colors retro-text text-[#f5f5f5]"
              >
                Blog
              </Link>
            </li>
            <li>
              <a
                href="#contact"
                className="text-xl hover:text-[#ff6b6b] transition-colors retro-text text-[#f5f5f5]"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
