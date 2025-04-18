import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import hotelView1 from "../../assets/Vista-1.jpg";
import hotelView2 from "../../assets/Vista-2.jpg";
import hotelView3 from "../../assets/Vista-3.jpg";
import leisure1 from "../../assets/hidromassagem.jpg";
import leisure2 from "../../assets/ioga.jpg";
import leisure3 from "../../assets/massagem-relaxante.jpg";
import leisure4 from "../../assets/piscina.jpg";

function LeisureArea() {
  return (
    <div id="leisure-area" className="bg-color-e md:pb-10">
      <div className="md:w-[70%] max-w-[600px] mx-auto">
        <h2 className="dm-serif-display-regular color-b text-3xl text-center uppercase px-3">
          Atividades de lazer e lindas vistas
        </h2>
        <p className="libre-baskerville-regular italic color-a text-center px-3 py-2 mb-5">
          No EDEN Hotels, o lazer é uma arte. Desfrute de momentos de puro
          êxtase entre piscinas serenas, terapias revitalizantes e vistas
          deslumbrantes — seja sobre florestas ancestrais, o ritmo urbano ou o
          infinito azul do mar. Cada detalhe foi concebido para elevar seus
          sentidos.
        </p>
      </div>
      <div id="leisure-area-container">
        <h3 className="libre-baskerville-regular uppercase text-center text-2xl font-bold color-a my-3">
          Lazer
        </h3>
        <div
          id="gallery"
          className="mb-15 md:grid md:grid-cols-2 mx-auto max-w-[500px] md:max-w-[90%] lg:max-w-[80%]"
        >
          <div className="overlay overflow-hidden">
            <div className="card-img relative">
              <LazyLoadImage
                src={leisure1}
                className="md:h-full md:w-full md:object-cover max-h-[300px] lg:max-h-[400px] w-full object-cover object-bottom hover:scale-110 transition-all duration-500 ease-in"
                alt="Hidromassagem"
              />
              <span className="absolute bottom-0 left-0 libre-baskerville-regular uppercase font-bold text-lg p-4 color-e w-full h-25 text-end flex items-end linear-gradient-black">
                Hidromassagem
              </span>
            </div>
          </div>
          <div className="overlay overflow-hidden">
            <div className="card-img relative">
              <LazyLoadImage
                src={leisure2}
                className="md:h-full md:w-full md:object-cover max-h-[300px] lg:max-h-[400px] w-full object-cover object-bottom hover:scale-110 transition-all duration-500 ease-in"
                alt="Ioga"
              />
              <span className="absolute bottom-0 left-0 libre-baskerville-regular uppercase font-bold text-lg p-4 color-e w-full h-25 text-end flex items-end linear-gradient-black">
                Ioga
              </span>
            </div>
          </div>
          <div className="overlay overflow-hidden">
            <div className="card-img relative">
              <LazyLoadImage
                src={leisure3}
                className="md:h-full md:w-full md:object-cover max-h-[300px] lg:max-h-[400px] w-full object-cover object-bottom hover:scale-110 transition-all duration-500 ease-in"
                alt="Massagem relaxante"
              />
              <span className="absolute bottom-0 left-0 libre-baskerville-regular uppercase font-bold text-lg p-4 color-e w-full h-25 text-end flex items-end linear-gradient-black">
                Massagem relaxante
              </span>
            </div>
          </div>
          <div className="overlay overflow-hidden">
            <div className="card-img relative">
              <LazyLoadImage
                src={leisure4}
                className="md:h-full md:w-full md:object-cover max-h-[300px] lg:max-h-[400px] w-full object-cover object-bottom hover:scale-110 transition-all duration-500 ease-in"
                alt="Piscina"
              />
              <span className="absolute bottom-0 left-0 libre-baskerville-regular uppercase font-bold text-lg p-4 color-e w-full h-25 text-end flex items-end linear-gradient-black">
                Piscina
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="leisure-area-container">
        <h3 className="libre-baskerville-regular uppercase text-center text-2xl font-bold color-a my-3">
          Vistas
        </h3>
        <div
          id="gallery"
          className="md:grid md:grid-cols-2 md:w-[90%] mx-auto max-w-[500px] md:max-w-[90%] lg:max-w-[80%]"
        >
          <div className="overlay overflow-hidden">
            <div className="card-img relative">
              <LazyLoadImage
                src={hotelView1}
                className="md:h-full md:w-full md:object-cover max-h-[300px] lg:max-h-[400px] w-full object-cover object-bottom hover:scale-110 transition-all duration-500 ease-in"
                alt="Visata do EDEN Hotels"
              />
              <span className="absolute bottom-0 left-0 libre-baskerville-regular uppercase font-bold text-lg p-4 color-e w-full h-25 text-end flex items-end linear-gradient-black">
                Vista para a cidade
              </span>
            </div>
          </div>
          <div className="overlay overflow-hidden">
            <div className="card-img relative">
              <LazyLoadImage
                src={hotelView2}
                className="md:h-full md:w-full md:object-cover max-h-[300px] lg:max-h-[400px] w-full object-cover object-bottom hover:scale-110 transition-all duration-500 ease-in"
                alt="Vista do EDEN Hotels"
              />
              <span className="absolute bottom-0 left-0 libre-baskerville-regular uppercase font-bold text-lg p-4 color-e w-full h-25 text-end flex items-end linear-gradient-black">
                Vista para o mar
              </span>
            </div>
          </div>
          <div className="overlay overflow-hidden md:col-span-2">
            <div className="card-img relative">
              <LazyLoadImage
                src={hotelView3}
                className="md:h-full md:w-full md:object-cover max-h-[300px] lg:max-h-[400px] w-full object-cover object-bottom hover:scale-110 transition-all duration-500 ease-in"
                alt="Vista do EDEN Hotels"
              />
              <span className="absolute bottom-0 left-0 libre-baskerville-regular uppercase font-bold text-lg p-4 color-e w-full h-25 text-end flex items-end linear-gradient-black">
                Vista para as florestas
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeisureArea;
