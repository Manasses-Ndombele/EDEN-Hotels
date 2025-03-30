import BrandArea from "../BrandArea";
import { GoStarFill } from "react-icons/go";
import { RiDoubleQuotesL } from "react-icons/ri";
import bg from "../../assets/bg.jpg";

function DatasArea() {
  return (
    <div id="datas-area" className="bg-color-a pt-5 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      <div id="datas-area-container">
        <BrandArea />
        <section
          id="feedback-stars"
          className="flex items-center gap-1 mx-auto w-min"
        >
          <GoStarFill className="text-amber-300 text-xl" />
          <GoStarFill className="text-amber-300 text-xl" />
          <GoStarFill className="text-amber-300 text-xl" />
          <GoStarFill className="text-amber-300 text-xl" />
          <GoStarFill className="text-amber-300 text-xl" />
        </section>
        <div id="feedback-description" className="color-c px-5 py-4 mx-auto max-w-[500px] md:w-[60%]">
          <RiDoubleQuotesL className="inline text-3xl" />
          <span className="text-base libre-baskerville-regular">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            recusandae ex non a. Nostrum molestiae velit quasi eaque, inventore
            iste nobis in cupiditate temporibus autem suscipit, ipsa alias
            facere vel. - <strong>Chandler Moore</strong>
          </span>
        </div>
        <div
          id="results-area"
          className="color-e grid grid-cols-2 gap-2 justify-content-center items-center px-3 mx-auto max-w-[500px] md:w-[60%]"
        >
          <section>
            <p className="flex items-center gap-2">
              <span className="dm-serif-display-regular text-4xl">14</span>
              <span className="libre-baskerville-regular w-min">
                anos no mercado
              </span>
            </p>
          </section>
          <section>
            <p className="flex items-center gap-2">
              <span className="dm-serif-display-regular text-4xl">22</span>
              <span className="libre-baskerville-regular w-min">críticas</span>
            </p>
          </section>
          <section>
            <p className="flex items-center gap-2">
              <span className="dm-serif-display-regular text-4xl">5</span>
              <span className="libre-baskerville-regular w-min">estrelas</span>
            </p>
          </section>
          <section>
            <p className="flex items-center gap-2">
              <span className="dm-serif-display-regular text-4xl">6</span>
              <span className="libre-baskerville-regular w-min">
                países sediados
              </span>
            </p>
          </section>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 315">
        <path
          fill="#f5f5f5"
          fillOpacity="1"
          d="M0,224L48,197.3C96,171,192,117,288,133.3C384,149,480,235,576,256C672,277,768,235,864,213.3C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default DatasArea;
