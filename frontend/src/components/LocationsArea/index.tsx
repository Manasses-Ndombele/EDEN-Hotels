import location1 from "../../assets/França-Paris.jpeg";
import location2 from "../../assets/Holanda-Amsterdã.jpeg";
import location3 from "../../assets/Luxemburgo-Luxemburgo.jpeg";
import location4 from "../../assets/Norouega-Oslo.jpeg";
import location5 from "../../assets/Suíça-Berna.jpeg";
import location6 from "../../assets/Turquia-Istambul.jpeg";

function LocationsArea() {
  return (
    <div id="locations-area" className="my-6" >
      <div className="md:w-[70%] mx-auto max-w-[500px]">
        <h2 className="libre-baskerville-regular text-2xl color-a text-center uppercase italic font-bold">Locais</h2>
        <p className="text-center text-base px-2 libre-baskerville-regular">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam id
          cumque, aliquam
        </p>
      </div>
      <div id="locations-container" className="my-5 md:grid md:grid-cols-2 md:max-w-[90%] mx-auto max-w-[600px] lg:max-w-[80%] xl:max-w-[70%]">
        <div className="card-img relative">
          <img src={location1} className="h-[20rem] object-cover w-full" alt="EDEN Hotel em Paris" />
          <span className="absolute bottom-0 left-0 h-25 uppercase libre-baskerville-regular color-e p-2 font-bold flex items-end text-lg linear-gradient-black w-full">Paris - França</span>
        </div>
        <div className="card-img relative">
          <img src={location2} className="h-[20rem] object-cover w-full" alt="EDEN Hotel em Paris" />
          <span className="absolute bottom-0 left-0 h-25 uppercase libre-baskerville-regular color-e p-2 font-bold flex items-end text-lg linear-gradient-black w-full">Holanda - Amsterdã</span>
        </div>
        <div className="card-img relative">
          <img src={location3} className="h-[20rem] object-cover w-full" alt="EDEN Hotel em Paris" />
          <span className="absolute bottom-0 left-0 h-25 uppercase libre-baskerville-regular color-e p-2 font-bold flex items-end text-lg linear-gradient-black w-full">Luxemburgo - Luxemburgo</span>
        </div>
        <div className="card-img relative">
          <img src={location4} className="h-[20rem] object-cover w-full" alt="EDEN Hotel em Paris" />
          <span className="absolute bottom-0 left-0 h-25 uppercase libre-baskerville-regular color-e p-2 font-bold flex items-end text-lg linear-gradient-black w-full">Norouega - Oslo</span>
        </div>
        <div className="card-img relative">
          <img src={location5} className="h-[20rem] object-cover w-full" alt="EDEN Hotel em Paris" />
          <span className="absolute bottom-0 left-0 h-25 uppercase libre-baskerville-regular color-e p-2 font-bold flex items-end text-lg linear-gradient-black w-full">Suiça - Berna</span>
        </div>
        <div className="card-img relative">
          <img src={location6} className="h-[20rem] object-cover w-full" alt="EDEN Hotel em Paris" />
          <span className="absolute bottom-0 left-0 h-25 uppercase libre-baskerville-regular color-e p-2 font-bold flex items-end text-lg linear-gradient-black w-full">Turquia - Istambul</span>
        </div>
      </div>
    </div>
  );
}

export default LocationsArea;
