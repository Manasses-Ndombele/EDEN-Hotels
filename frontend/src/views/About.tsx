import Header from "../components/Header";
import HotelVideo from "../components/HotelVideo";
import HistoryArea from "../components/HistoryArea";
import BrandingArea from "../components/BrandingArea";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Header active="about" />
      <main className="bg-color-e">
        <HotelVideo />
        <HistoryArea />
        <BrandingArea />
      </main>
      <Footer aboutPage={true} />
    </>
  );
}

export default About;
