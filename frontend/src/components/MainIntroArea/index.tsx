import HotelHome1 from "../../assets/hotel home.jpeg";

function MainIntroArea() {
  return (
    <div
      id="intro-overlay"
      className="bg-cover bg-center md:bg-fixed h-[25rem] lg:h-[30rem]"
      style={{ backgroundImage: `url(${HotelHome1})` }}
    >
      <div id="intro-content" className="bg-color-ba h-full md:flex md:items-center">
        <div id="main-intro-area" className="p-3 max-w-[500px] md:w-[70%] mx-auto">
          <h1 className="dm-serif-display-regular text-4xl uppercase color-d text-center">
            O melhor hotel da Europa!
          </h1>
          <p className="text-lg libre-baskerville-regular color-d text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quis
            a harum. Impedit o
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainIntroArea;
