import location1 from "../../assets/França-Paris.jpeg";
import location2 from "../../assets/Holanda-Amsterdã.jpeg";
import location3 from "../../assets/Luxemburgo-Luxemburgo.jpeg";
import location4 from "../../assets/Norouega-Oslo.jpeg";
import location5 from "../../assets/Suíça-Berna.jpeg";
import location6 from "../../assets/Turquia-Istambul.jpeg";

function LocationsArea() {
  return (
    <div id="locations-area">
      <h2>Locais</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam id
        cumque, aliquam magni dolorum, harum culpa asperiores placeat enim quia
        incidunt. Error dolor laudantium corrupti autem suscipit, mollitia
        deserunt iste!
      </p>
      <div className="locations-container">
        <div className="card-img">
          <img src={location1} alt="EDEN Hotel em Paris" />
          <span>Paris - França</span>
        </div>
        <div className="card-img">
          <img src={location2} alt="EDEN Hotel em Paris" />
          <span>Holanda - Amsterdã</span>
        </div>
        <div className="card-img">
          <img src={location3} alt="EDEN Hotel em Paris" />
          <span>Luxemburgo - Luxemburgo</span>
        </div>
        <div className="card-img">
          <img src={location4} alt="EDEN Hotel em Paris" />
          <span>Norouega - Oslo</span>
        </div>
        <div className="card-img">
          <img src={location5} alt="EDEN Hotel em Paris" />
          <span>Suiça - Berna</span>
        </div>
        <div className="card-img">
          <img src={location6} alt="EDEN Hotel em Paris" />
          <span>Turquia - Istambul</span>
        </div>
      </div>
    </div>
  );
}

export default LocationsArea;
