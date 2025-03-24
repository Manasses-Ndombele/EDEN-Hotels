import Header from "../components/Header";
import LocationsArea from "../components/LocationsArea";
import ReserveCTA from "../components/ReserveCTA";
import Footer from "../components/Footer";

function HotelChain() {
  return (
    <>
      <Header />
      <main className="bg-color-e py-6">
        <div className="md:w-[70%] mx-auto max-w-[600px]">
          <h1 className="px-2 text-center text-3xl color-b uppercase dm-serif-display-regular">A maior rede de hotéis da Europa!</h1>
          <p className="text-center px-3 italic libre-baskerville-regular my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus non laudantium cumque obcaecati sed, quam ex dignissimos saepe adipisci? Molestias ad dolorum culpa perferendis? Quaerat saepe illum quos ea nam.</p>
        </div>
        <LocationsArea />
        <ReserveCTA />
      </main>
      <Footer />
    </>
  );
}

export default HotelChain;
