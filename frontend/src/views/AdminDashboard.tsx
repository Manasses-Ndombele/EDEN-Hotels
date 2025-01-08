import Header from "../components/Header";
import BrandArea from "../components/BrandArea";
import ReservesTable from "../components/ReservesTable";
import Footer from "../components/Footer";

function AdminDashboard() {
  return (
    <>
      <Header />
      <main>
        <BrandArea />
        <p>
          Seja bem vindo a área administrativa da EDEN Hotels aqui você poderá
          monitorar as reservas dos clientes
        </p>
        <ReservesTable />
      </main>
      <Footer />
    </>
  );
}

export default AdminDashboard;
