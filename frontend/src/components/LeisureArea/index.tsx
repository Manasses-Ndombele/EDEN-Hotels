import hotelView1 from "../../assets/Vista-1.jpg";
import hotelView2 from "../../assets/Vista-2.jpg";
import hotelView3 from "../../assets/Vista-3.jpg";
import leisure1 from "../../assets/hidromassagem.jpg";
import leisure2 from "../../assets/ioga.jpg";
import leisure3 from "../../assets/massagem-relaxante.jpg";
import leisure4 from "../../assets/piscina.jpg";

function LeisureArea() {
  return (
    <div id="leisure-area" className="bg-color-e">
      <h2 className="dm-serif-display-regular color-b text-3xl text-center uppercase px-2">
        Atividades de lazer e lindas vistas
      </h2>
      <p className="libre-baskerville-regular italic color-a text-center px-3 py-2 mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rem
        dolores modi voluptatem tempora eum molestias cumque laborum neque
        possimus dolore consequuntur accusamus suscipit, soluta iusto,
        necessitatibus vel quod porro.
      </p>
      <div id="leisure-area-container">
        <h3 className="libre-baskerville-regular uppercase text-center text-2xl font-bold color-a my-3 italic">
          Lazer
        </h3>
        <div id="gallery" className="mb-15">
          <div className="card-img relative">
            <img src={leisure1} alt="Hidromassagem" />
            <span className="absolute bottom-0 left-0 libre-baskerville-regular uppercase font-bold text-lg p-4 color-e w-full h-25 text-end flex items-end linear-gradient-black">
              Hidromassagem
            </span>
          </div>
          <div className="card-img relative">
            <img src={leisure2} alt="Ioga" />
            <span className="absolute bottom-0 left-0 libre-baskerville-regular uppercase font-bold text-lg p-4 color-e w-full h-25 text-end flex items-end linear-gradient-black">
              Ioga
            </span>
          </div>
          <div className="card-img relative">
            <img src={leisure3} alt="Massagem relaxante" />
            <span className="absolute bottom-0 left-0 libre-baskerville-regular uppercase font-bold text-lg p-4 color-e w-full h-25 text-end flex items-end linear-gradient-black">
              Massagem relaxante
            </span>
          </div>
          <div className="card-img relative">
            <img src={leisure4} alt="Piscina" />
            <span className="absolute bottom-0 left-0 libre-baskerville-regular uppercase font-bold text-lg p-4 color-e w-full h-25 text-end flex items-end linear-gradient-black">
              Piscina
            </span>
          </div>
        </div>
      </div>
      <div id="leisure-area-container">
        <h3 className="libre-baskerville-regular uppercase text-center text-2xl font-bold color-a my-3 italic">
          Vistas
        </h3>
        <div id="gallery">
          <div className="card-img relative">
            <img src={hotelView1} alt="Vista do EDEN Hotels" />
            <span className="absolute bottom-0 left-0 libre-baskerville-regular uppercase font-bold text-lg p-4 color-e w-full h-25 text-end flex items-end linear-gradient-black">
              Vista para a cidade
            </span>
          </div>
          <div className="card-img relative">
            <img src={hotelView2} alt="Vista do EDEN Hotels" />
            <span className="absolute bottom-0 left-0 libre-baskerville-regular uppercase font-bold text-lg p-4 color-e w-full h-25 text-end flex items-end linear-gradient-black">
              Vista para as florestas
            </span>
          </div>
          <div className="card-img relative">
            <img src={hotelView3} alt="Vista do EDEN Hotels" />
            <span className="absolute bottom-0 left-0 libre-baskerville-regular uppercase font-bold text-lg p-4 color-e w-full h-25 text-end flex items-end linear-gradient-black">
              Vista para as florestas
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeisureArea;
