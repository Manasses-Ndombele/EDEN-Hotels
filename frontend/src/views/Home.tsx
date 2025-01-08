import Header from "../components/Header";
import DatasArea from "../components/DatasArea";
import RoomServiceArea from "../components/RoomServiceArea";
import KitchenArea from "../components/KitchenArea";
import LeisureArea from "../components/LeisureArea";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <main>
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
