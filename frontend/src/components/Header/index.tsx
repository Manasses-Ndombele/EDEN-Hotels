import LogoArea from "../LogoArea";

interface Props {
  active?: string;
}

function Header({ active = "" }: Props) {
  return (
    <header className="w-full flex flex-col items-center justify-center p-3 bg-color-a">
      <LogoArea lg={true} />
      <nav
        id="main-nav"
        className="w-full flex items-start justify-evenly md:justify-center md:gap-10 max-w-[450px]"
      >
        <a
          href="/"
          className={`${
            active === "home" ? "active flex flex-col items-center" : ""
          } text-lg libre-baskerville-regular color-d transition-colors ease-in duration-300`}
        >
          Início
        </a>
        <a
          href="/rede-de-hoteis"
          className={`${
            active === "hotel-chain" ? "active flex flex-col items-center" : ""
          } text-lg libre-baskerville-regular color-d transition-colors ease-in duration-300`}
        >
          Rede
        </a>
        <a
          href="/reservas"
          className={`${
            active === "reserves" ? "active flex flex-col items-center" : ""
          } text-lg libre-baskerville-regular color-d transition-colors ease-in duration-300`}
        >
          Reservas
        </a>
        <a
          href="/sobre"
          className={`${
            active === "about" ? "active flex flex-col items-center" : ""
          } text-lg libre-baskerville-regular color-d transition-colors ease-in duration-300`}
        >
          Sobre
        </a>
      </nav>
    </header>
  );
}

export default Header;
