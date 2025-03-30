import { Link } from "react-router-dom";

function ReserveCTA() {
  return (
    <div className="reserve-cta px-3 py-7 bg-color-e md:w-[90%] mx-auto md:flex md:flex-col md:items-center max-w-[600px]">
      <h2 className="color-a dm-serif-display-regular text-2xl font-bold uppercase md:text-3xl">
        Reserve ainda hoje!
      </h2>
      <p className="color-a libre-baskerville-regular text-lg italic md:w-[80%] md:text-center">
        Estamos sempre prontos para te receber! Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. At voluptates iste
      </p>
      <Link to="/reservas">
        <button
          type="button"
          className="w-full max-w-[200px] md:w-min md:px-10 p-3 color-d libre-baskerville-regular uppercase font-bold tracking-wide focus:tracking-tight text-lg bg-color-b cursor-pointer mt-3 border-r-4 border-b-4 border-color-a focus:border-0 transition-all ease-in duration-200"
        >
          Reservar
        </button>
      </Link>
    </div>
  );
}

export default ReserveCTA;
