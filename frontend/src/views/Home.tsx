import Header from "../components/Header";
import MainIntroArea from "../components/MainIntroArea";
import DatasArea from "../components/DatasArea";
import RoomServiceArea from "../components/RoomServiceArea";
import KitchenArea from "../components/KitchenArea";
import LeisureArea from "../components/LeisureArea";
import Footer from "../components/Footer";
import HotelHome1 from "../assets/hotel home.jpeg";

function Home() {
  return (
    <>
      <Header />
      <main>
        <div
          id="intro-overlay"
          className="bg-cover bg-center h-[25rem]"
          style={{ backgroundImage: `url(${HotelHome1})` }}
        >
          <div id="intro-content" className="bg-color-ba h-full">
            <MainIntroArea />
          </div>
        </div>
        <DatasArea />
        <RoomServiceArea />
        <KitchenArea />
        <LeisureArea />
      </main>
      <Footer />
    </>
  );
}

export default Home;
