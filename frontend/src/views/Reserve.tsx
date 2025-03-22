import Header from "../components/Header";
import ReserveForm from "../components/ReserveForm";
import Footer from "../components/Footer";

function Reserve() {
  return (
    <>
      <Header />
      <main className="px-6 mb-8">
        <h1 className="uppercase text-3xl dm-serif-display-regular color-b py-4">Reserve ainda hoje!</h1>
        <p className="libre-baskerville-regular color-a italic pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis enim optio dolore sit nihil nisi itaque omnis dignissimos, inventore, temporibus sunt fugiat assumenda dolorum consequuntur, reiciendis eaque perferendis iure totam?</p>
        <ReserveForm />
      </main>
      <Footer />
    </>
  );
}

export default Reserve;
