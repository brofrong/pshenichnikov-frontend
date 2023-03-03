import Image from "next/image";
import Link from "next/link";
import logo from "../../public/img/pshenichikov-logo.png";
import logo2 from "../../public/img/pshinichnikov-logo-2.png";


const Header: React.FC = () => {
  return (
    <header className="h-[70px] bg-[#555C70] flex justify-between fixed w-screen top-0 z-50">

      <div>
        <Link
          href={"/"}>
          <Image src={logo} height="96" width="550" alt='Pshnichnicov logo' priority />
        </Link>
        <Image src={logo2} height="400" width="53" alt='Pshnichnicov logo' priority />
      </div>

      <div className="flex p-4 gap-4 items-center">
        <HeaderLink text="О нас" href="/about" />
        <HeaderLink text="Награды" href="/awards" />
        <HeaderLink text="Контакты" href="/contact" />
        <HeaderLink text="Портфолио" href="/portfolio" />
      </div>

    </header >
  );
};

const HeaderLink: React.FC<{ text: string, href: string }> = ({ href, text }) => {
  return <Link
    className="flex text-white hover:text-slate-200 text-xl h-fit whitespace-nowrap"
    href={href}
  > {text}
  </Link>
}

export default Header;
