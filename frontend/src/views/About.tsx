import Header from "../components/Header";
import HotelVideo from "../components/HotelVideo";
import HistoryArea from "../components/HistoryArea";
import DatasArea from "../components/DatasArea";
import ReserveCTA from "../components/ReserveCTA";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Header active="about" />
      <main className="bg-color-e">
        <HotelVideo />
        <HistoryArea />
        <DatasArea />
        <ReserveCTA />
      </main>
      <Footer />
    </>
  );
}

export default About;
