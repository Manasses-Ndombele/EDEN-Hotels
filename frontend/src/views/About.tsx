import Header from "../components/Header";
import HistoryArea from "../components/HistoryArea";
import DatasArea from "../components/DatasArea";
import ReserveCTA from "../components/ReserveCTA";
import Footer from "../components/Footer";
import HotelVideo from "../assets/hotelvideo.mp4"

function About() {
  return (
    <>
      <Header />
      <main className="bg-color-e">
        <video autoPlay={true} muted={true} controls={true} className="max-h-[300px] w-full bg-color-ba" >
          <source src={HotelVideo} type="video/mp4" />
        </video>
        <HistoryArea />
        <DatasArea />
        <ReserveCTA />
      </main>
      <Footer />
    </>
  );
}

export default About;
