import location1 from "../../assets/França-Paris.jpeg";
import location2 from "../../assets/Holanda-Amsterdã.jpeg";
import location3 from "../../assets/Luxemburgo-Luxemburgo.jpeg";
import location4 from "../../assets/Norouega-Oslo.jpeg";
import location5 from "../../assets/Suíça-Berna.jpeg";
import location6 from "../../assets/Turquia-Istambul.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

function LocationsArea() {
  return (
    <div id="locations-area" className="my-6">
      <div className="md:w-[70%] mx-auto max-w-[500px]">
        <h2 className="libre-baskerville-regular text-2xl color-a text-center uppercase font-bold">
          Locais
        </h2>
        <p className="text-center text-base px-2 libre-baskerville-regular">
          Estamos localizados em qualquer paísm europeu que você já sonhou em
          visitar prontos para realizar os teus sonhos!
        </p>
      </div>
      <div
        id="locations-container"
        className="my-5 md:grid md:grid-cols-2 md:max-w-[90%] mx-auto max-w-[600px] lg:max-w-[80%] xl:max-w-[70%]"
      >
        <div className="overlay overflow-hidden">
          <div className="card-img relative">
            <LazyLoadImage
              src={location1}
              className="h-[20rem] object-cover w-full transition-all ease-in duration-300 hover:scale-110"
              alt="EDEN Hotel em Paris"
            />
            <span className="absolute bottom-0 left-0 h-25 uppercase libre-baskerville-regular color-e p-2 font-bold flex items-end text-lg linear-gradient-black w-full">
              França - Paris
            </span>
          </div>
        </div>
        <div className="overlay overflow-hidden">
          <div className="card-img relative">
            <LazyLoadImage
              src={location2}
              className="h-[20rem] object-cover w-full transition-all ease-in duration-300 hover:scale-110"
              alt="EDEN Hotel em Amsterdã"
            />
            <span className="absolute bottom-0 left-0 h-25 uppercase libre-baskerville-regular color-e p-2 font-bold flex items-end text-lg linear-gradient-black w-full">
              Holanda - Amsterdã
            </span>
          </div>
        </div>
        <div className="overlay overflow-hidden">
          <div className="card-img relative">
            <LazyLoadImage
              src={location3}
              className="h-[20rem] object-cover w-full transition-all ease-in duration-300 hover:scale-110"
              alt="EDEN Hotel em Luxemburgo"
            />
            <span className="absolute bottom-0 left-0 h-25 uppercase libre-baskerville-regular color-e p-2 font-bold flex items-end text-lg linear-gradient-black w-full">
              Luxemburgo - Luxemburgo
            </span>
          </div>
        </div>
        <div className="overlay overflow-hidden">
          <div className="card-img relative">
            <LazyLoadImage
              src={location4}
              className="h-[20rem] object-cover w-full transition-all ease-in duration-300 hover:scale-110"
              alt="EDEN Hotel em Oslo"
            />
            <span className="absolute bottom-0 left-0 h-25 uppercase libre-baskerville-regular color-e p-2 font-bold flex items-end text-lg linear-gradient-black w-full">
              Norouega - Oslo
            </span>
          </div>
        </div>
        <div className="overlay overflow-hidden">
          <div className="card-img relative">
            <LazyLoadImage
              src={location5}
              className="h-[20rem] object-cover w-full transition-all ease-in duration-300 hover:scale-110"
              alt="EDEN Hotel em Berna"
            />
            <span className="absolute bottom-0 left-0 h-25 uppercase libre-baskerville-regular color-e p-2 font-bold flex items-end text-lg linear-gradient-black w-full">
              Suiça - Berna
            </span>
          </div>
        </div>
        <div className="overlay overflow-hidden">
          <div className="card-img relative">
            <LazyLoadImage
              src={location6}
              className="h-[20rem] object-cover w-full transition-all ease-in duration-300 hover:scale-110"
              alt="EDEN Hotel em Istambul"
            />
            <span className="absolute bottom-0 left-0 h-25 uppercase libre-baskerville-regular color-e p-2 font-bold flex items-end text-lg linear-gradient-black w-full">
              Turquia - Istambul
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationsArea;
