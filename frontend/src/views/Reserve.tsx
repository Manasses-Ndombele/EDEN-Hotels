import Header from "../components/Header";
import BrandArea from "../components/BrandArea";
import ReserveForm from "../components/ReserveForm";
import Footer from "../components/Footer";

function Reserve() {
  return (
    <>
      <Header />
      <main>
        <BrandArea />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis enim optio dolore sit nihil nisi itaque omnis dignissimos, inventore, temporibus sunt fugiat assumenda dolorum consequuntur, reiciendis eaque perferendis iure totam?</p>
        <ReserveForm />
      </main>
      <Footer />
    </>
  );
}

export default Reserve;
