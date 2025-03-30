import Header from "../components/Header";
import ReserveForm from "../components/ReserveForm";
import Footer from "../components/Footer";
import reserveBg from "../assets/reserves-bg.jpg";

function Reserves() {
  return (
    <>
      <Header active="reserves" />
      <main
        className="px-6 pb-8 max-w-[600px] md:max-w-[100%] bg-center bg-cover"
        style={{ backgroundImage: `url(${reserveBg})` }}
      >
        <div className="max-w-[500px] md:mx-auto">
          <h1 className="uppercase text-3xl dm-serif-display-regular color-b py-4">
            Reserve ainda hoje!
          </h1>
          <p className="libre-baskerville-regular color-a italic pb-4">
            Hospedar-se no EDEN Hotels é viver o ápice do conforto e
            sofisticação: serviço impecável, acomodações luxuosas, gastronomia
            estrelada e experiências exclusivas – tudo para transformar sua
            estadia em memórias inesquecíveis.
          </p>
        </div>
        <div className="md:max-w-[500px] md:mx-auto">
          <ReserveForm />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Reserves;
