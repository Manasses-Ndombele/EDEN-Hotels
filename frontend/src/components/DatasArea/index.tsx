import BrandArea from "../BrandArea";
import { GoStarFill } from "react-icons/go";
import { RiDoubleQuotesL } from "react-icons/ri";

function DatasArea() {
  return (
    <div id="datas-area">
      <div className="datas-area-container">
        <BrandArea />
        <section id="feedback-stars">
          <GoStarFill />
          <GoStarFill />
          <GoStarFill />
          <GoStarFill />
          <GoStarFill />
        </section>
        <div id="feedback-description">
          <RiDoubleQuotesL />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
          recusandae ex non a. Nostrum molestiae velit quasi eaque, inventore
          iste nobis in cupiditate temporibus autem suscipit, ipsa alias facere
          vel.
        </div>
        <div id="results-area">
          <section>
            <p>
              <span>10</span> anos no mercado
            </p>
          </section>
          <section>
            <p>
              <span>724</span> avaliações de clientes
            </p>
          </section>
          <section>
            <p>
              <span>5</span> estrelas
            </p>
          </section>
          <section>
            <p>
              <span>6</span> países sediados
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default DatasArea;
