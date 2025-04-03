import LogoArea from "../LogoArea";
import { GoStarFill } from "react-icons/go";
import { RiDoubleQuotesL } from "react-icons/ri";
import bg from "../../assets/bg-datas.jpg";

function DatasArea() {
  return (
    <div
      id="datas-area"
      className="bg-color-a py-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div id="datas-area-container">
        <LogoArea />
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
        <div
          id="feedback-description"
          className="color-c px-5 py-4 mx-auto max-w-[500px] md:w-[60%]"
        >
          <RiDoubleQuotesL className="inline text-3xl" />
          <span className="text-base libre-baskerville-regular">
            O EDEN Hotels redefine o luxo europeu com sua combinação impecável
            de elegância clássica e contemporânea. Cada detalhe – do atendimento
            discreto aos acabamentos em mármore – exala sofisticação. Uma
            experiência que supera expectativas. -{" "}
            <strong>Sir Reginald Whitmore</strong>
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
    </div>
  );
}

export default DatasArea;
