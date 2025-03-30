import founderPhoto from "../../assets/CEO.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

function HistoryArea() {
  return (
    <div
      id="history-area"
      className="p-5 md:flex md:items-start md:justify-between max-w-[600px] lg:max-w-[900px] lg:justify-around lg:gap-4 lg:my-5 lg:items-center mx-auto"
    >
      <div className="md:w-[50%]">
        <h2 className="dm-serif-display-regular uppercase text-2xl lg:text-3xl color-b font-bold">
          Nossa história
        </h2>
        <p className="libre-baskerville-regular color-a italic mt-2 mb-5 text-justify">
          Em 2005, o empreendedor Lorenzo DeMarco transformou um antigo palácio
          em Milão no primeiro EDEN Hotels, combinando herança arquitetônica com
          tecnologia de ponta. Sua visão? Oferecer luxo experiencial — onde
          design inteligente, sustentabilidade e serviço hiperpersonalizado
          redefiniram a hospitalidade. Em menos de uma década, o EDEN tornou-se
          sinônimo de inovação, atraindo viajantes globais.
        </p>
        <p className="libre-baskerville-regular color-a italic mt-2 mb-5 text-justify">
          <strong className="block">Domínio Continental</strong> Com investimentos audaciosos, o EDEN expandiu para
          capitais estratégicas, adquirindo propriedades icônicas. Hoje, lidera
          o mercado hoteleiro europeu, mantendo seu DNA: vanguarda discreta e
          conexão autêntica com cada destino.
        </p>
      </div>
      <LazyLoadImage
        src={founderPhoto}
        alt="Foto do fundador da EDEN Hotels"
        effect="black-and-white"
        className="h-[25rem] object-cover w-full md:w-auto object-center"
      />
    </div>
  );
}

export default HistoryArea;
