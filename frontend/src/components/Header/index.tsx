import BrandArea from "../BrandArea";

function Header() {
  return (
    <header className="w-full flex flex-col items-center justify-center p-3 bg-color-a">
      <BrandArea />
      <nav className="w-full flex items-start justify-evenly md:justify-center md:gap-10 max-w-[450px]">
        <a href="/" className="text-lg libre-baskerville-regular color-d">Início</a>
        <a href="/rede-de-hoteis" className="text-lg libre-baskerville-regular color-d">Rede</a>
        <a href="/reservas" className="text-lg libre-baskerville-regular color-d">Reservas</a>
        <a href="/sobre" className="text-lg libre-baskerville-regular color-d">Sobre</a>
      </nav>
    </header>
  );
}

export default Header;
