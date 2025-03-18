import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import BrandArea from "../components/BrandArea";
import ReservesTable from "../components/ReservesTable";
import UsersTable from "../components/UsersTable";
import Footer from "../components/Footer";
import UserContext from "../services/UserContext";

function AdminDashboard() {
  const navigate = useNavigate();
  const { loggedIn, user } = useContext(UserContext);

  useEffect(() => {
    if (!loggedIn && Object.keys(user).length === 0 && !localStorage.getItem("token")) {
      console.log("Usuário não está logado!");
      navigate("/admin/login");
    }
  }, [loggedIn, navigate, user])

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
        <UsersTable />
      </main>
      <Footer />
    </>
  );
}

export default AdminDashboard;
