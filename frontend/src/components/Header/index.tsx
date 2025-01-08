import BrandArea from "../BrandArea";

function Header() {
  return (
    <header>
      <BrandArea />
      <nav>
        <a href="/">Início</a>
        <a href="/rede-de-hoteis">Rede</a>
        <a href="/reservar">Reservas</a>
        <a href="/sobre">Sobre</a>
      </nav>
    </header>
  );
}

export default Header;
