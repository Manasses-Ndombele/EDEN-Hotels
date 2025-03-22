import logo from "../../assets/logo.png";

function BrandArea() {
  return (
    <a href="/" className="w-full flex flex-col items-center mb-2">
      <section className="main-logo-area">
        <img src={logo} alt="Logo do hotel" className="size-28" />
      </section>
      <section className="title-area text-center">
        <span className="libre-baskerville-regular text-2xl tracking-widest font-bold color-d">EDEN</span>
        <br />
        <span className="libre-baskerville-regular font-bold color-d">HOTELS</span>
      </section>
    </a>
  );
}

export default BrandArea;
