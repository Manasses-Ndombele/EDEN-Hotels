import HotelHome1 from "../../assets/hotel home.jpeg";

function MainIntroArea() {
  return (
    <div
      id="intro-overlay"
      className="bg-cover bg-center md:bg-fixed h-[25rem] lg:h-[30rem]"
      style={{ backgroundImage: `url(${HotelHome1})` }}
    >
      <div
        id="intro-content"
        className="bg-color-ba h-full md:flex md:items-center"
      >
        <div
          id="main-intro-area"
          className="p-3 max-w-[700px] md:w-[70%] mx-auto"
        >
          <h1 className="dm-serif-display-regular text-4xl uppercase color-d text-center">
            Um Refúgio de Elegância no Coração da Europa!
          </h1>
          <p className="text-lg libre-baskerville-regular color-d text-center font-bold">
            Cada detalhe – desde os acabamentos em mármore até a atenção
            personalizada – foi cuidadosamente pensado para oferecer uma
            experiência que transcende o comum. Bem-vindo ao epítome do luxo
            discreto e da hospitalidade requintada.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainIntroArea;
