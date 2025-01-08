import logo from "../../assets/logo.png";

function BrandArea() {
  return (
    <a href="/">
      <section className="main-logo-area">
        <img src={logo} alt="Logo do hotel" />
      </section>
      <section className="title-area">
        <span>EDEN</span>
        <span>HOTELS</span>
      </section>
    </a>
  );
}

export default BrandArea;
