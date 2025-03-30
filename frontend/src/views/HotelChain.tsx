import Header from "../components/Header";
import LocationsArea from "../components/LocationsArea";
import ReserveCTA from "../components/ReserveCTA";
import Footer from "../components/Footer";

function HotelChain() {
  return (
    <>
      <Header active="hotel-chain" />
      <main className="bg-color-e py-6">
        <div className="md:w-[70%] mx-auto max-w-[600px]">
          <h1 className="px-3 text-center text-3xl color-b uppercase dm-serif-display-regular">
            A maior rede de hotéis da Europa!
          </h1>
          <p className="text-center px-3 italic libre-baskerville-regular my-2">
            O EDEN Hotels une o requinte europeu em destinos exclusivos — desde
            paisagens alpinas até capitais vibrantes, cada local oferece uma
            experiência única, sempre com nossa assinatura de luxo e
            autenticidade.
          </p>
        </div>
        <LocationsArea />
        <ReserveCTA />
      </main>
      <Footer />
    </>
  );
}

export default HotelChain;
