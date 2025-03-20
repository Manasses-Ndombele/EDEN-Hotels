import { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import BrandArea from "../components/BrandArea";
import ReservesTable from "../components/ReservesTable";
import UsersTable from "../components/UsersTable";
import Footer from "../components/Footer";
import UserContext from "../services/UserContext";
import EditUserForm from "../components/EditUserForm";
import DeleteAccountBtn from "../components/DeleteAccountBtn";

function AdminDashboard() {
  const navigate = useNavigate();
  const { loggedIn, user } = useContext(UserContext);

  useEffect(() => {
    if (
      !loggedIn &&
      Object.keys(user).length === 0 &&
      !localStorage.getItem("token")
    ) {
      console.log("Usuário não está logado!");
      navigate("/admin/login");
    }
  }, [loggedIn, navigate, user]);

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
        {user.type === "SUPER_USER" ? <UsersTable /> : null}
        <EditUserForm />
        <Link to="/admin/logout">Terminar sessão</Link>
        <DeleteAccountBtn />
      </main>
      <Footer />
    </>
  );
}

export default AdminDashboard;
