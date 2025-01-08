import maid1 from "../../assets/Camareira-1.jpeg";
import maid2 from "../../assets/Camareira-2.jpeg";
import maid3 from "../../assets/Camareira-3.jpeg";

function RoomServiceArea() {
  return (
    <div id="room-service-area">
      <h2>Serviço de quartos</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        culpa fugit accusantium necessitatibus sed repudiandae exercitationem
        labore porro ipsum blanditiis nobis aperiam, deleniti laborum dolor,
        quasi harum! Suscipit, sit quisquam!
      </p>
      <div className="maids-container">
        <img src={maid1} alt="Camareira da EDEN Hotels" />
        <img src={maid2} alt="Camareira da EDEN Hotels" />
        <img src={maid3} alt="Camareira da EDEN Hotels" />
      </div>
    </div>
  );
}

export default RoomServiceArea;
