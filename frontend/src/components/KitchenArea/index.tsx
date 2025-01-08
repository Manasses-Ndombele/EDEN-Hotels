import chef1 from "../../assets/Chefes-1.jpeg";
import chef2 from "../../assets/Chefes-2.jpeg";
import chef3 from "../../assets/Chefes-3.jpeg";

function KitchenArea() {
  return (
    <div id="kitchen-area">
      <h2>Nossa cozinha e assets/Chefes</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
        incidunt dolores deserunt dolore, magni qui officia, aliquid, cupiditate
        architecto ducimus tempore ratione atque. Ullam, vel temporibus culpa
        recusandae distinctio quis.
      </p>
      <div className="kitchen-area-container">
        <div className="card">
          <img src={chef1} alt="Chefe de cozinha da EDEN Hotels" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ea,
            maiores magni dicta accusamus veritatis quia? Sunt beatae natus
            consequuntur ducimus quas. Quasi eaque sunt ipsa deserunt ea,
            accusamus minus.
          </p>
        </div>
        <div className="card">
          <img src={chef2} alt="Chefe de cozinha da EDEN Hotels" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ea,
            maiores magni dicta accusamus veritatis quia? Sunt beatae natus
            consequuntur ducimus quas. Quasi eaque sunt ipsa deserunt ea,
            accusamus minus.
          </p>
        </div>
        <div className="card">
          <img src={chef3} alt="Chefe de cozinha da EDEN Hotels" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ea,
            maiores magni dicta accusamus veritatis quia? Sunt beatae natus
            consequuntur ducimus quas. Quasi eaque sunt ipsa deserunt ea,
            accusamus minus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default KitchenArea;
