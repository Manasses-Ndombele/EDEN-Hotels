import logo from "../../assets/logo.png";

interface Props {
  lg?: boolean;
}

function LogoArea({ lg=false }: Props) {
  return (
    <div className="w-full flex flex-col items-center mb-2 cursor-default">
      <section className="main-logo-area">
        <img src={logo} alt="Logo do hotel" className={`${lg ? "md:size-12" : "md:size-20"} size-28`} />
      </section>
      <section className="title-area text-center">
        <span className={`${lg ? "md:text-xl" : ""} libre-baskerville-regular text-2xl tracking-wide font-bold color-d`}>EDEN</span>
        <br />
        <span className="libre-baskerville-regular font-bold color-d">HOTELS</span>
      </section>
    </div>
  );
}

export default LogoArea;
