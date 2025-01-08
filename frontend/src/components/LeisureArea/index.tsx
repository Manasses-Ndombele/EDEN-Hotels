import hotelView1 from "../../assets/Vista-1.jpeg";
import hotelView2 from "../../assets/Vista-2.jpeg";
import hotelView3 from "../../assets/Vista-3.jpeg";
import leisure1 from "../../assets/hidromassagem.jpg";
import leisure2 from "../../assets/ioga.jpeg";
import leisure4 from "../../assets/piscina.jpeg";

function LeisureArea() {
  return (
    <div id="leisure-area">
      <h2>Atividades de lazer e lindas vistas</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rem
        dolores modi voluptatem tempora eum molestias cumque laborum neque
        possimus dolore consequuntur accusamus suscipit, soluta iusto,
        necessitatibus vel quod porro.
      </p>
      <div className="leisure-area-container">
        <h3>Lazer</h3>
        <div className="gallery">
          <div className="card-img">
            <img src={leisure1} alt="Hidromassagem" />
            <span>Hidromassagem</span>
          </div>
          <div className="card-img">
            <img src={leisure2} alt="Ioga" />
            <span>Ioga</span>
          </div>
          <div className="card-img">
            <img src={leisure2} alt="Massagem relaxante" />
            <span>Massagem relaxante</span>
          </div>
          <div className="card-img">
            <img src={leisure4} alt="Piscina" />
            <span>Piscina</span>
          </div>
        </div>
      </div>
      <div className="leisure-area-container">
        <h3>Vistas</h3>
        <div className="gallery">
          <div className="card-img">
            <img src={hotelView1} alt="Vista do EDEN Hotels" />
            <span>Vista para o mar</span>
          </div>
          <div className="card-img">
            <img src={hotelView2} alt="Vista do EDEN Hotels" />
            <span>Vista para a cidade</span>
          </div>
          <div className="card-img">
            <img src={hotelView3} alt="Vista do EDEN Hotels" />
            <span>Vista para as florestas</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeisureArea;
