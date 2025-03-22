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
      <main>
        <video autoPlay={true} loop={true} muted={true} controls={true} >
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
