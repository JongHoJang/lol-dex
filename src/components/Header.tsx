import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="flex w-100% h-[100px] justify-center items-center bg-gray-800">
        <nav>
          <ul className="flex gap-[100px] text-[20px] font-white font-bold">
            <li>
              <Link href="/">홈</Link>
            </li>
            <li>
              <Link href="/champions">챔피언</Link>
            </li>
            <li>
              <Link href="/items">아이템</Link>
            </li>
            <li>
              <Link href="/rotation">로테이션 챔피언</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
