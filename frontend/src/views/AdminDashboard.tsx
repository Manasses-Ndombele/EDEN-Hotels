import { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import ReservesTable from "../components/ReservesTable";
import UsersTable from "../components/UsersTable";
import Footer from "../components/Footer";
import UserContext from "../services/UserContext";
import DeleteAccountBtn from "../components/DeleteAccountBtn";
import ModalUserContext from "../services/ModalUser";
import ModalUser from "../components/ModalUser";

function AdminDashboard() {
  const navigate = useNavigate();
  const { loggedIn, user } = useContext(UserContext);
  const { setModalUserStatus } = useContext(ModalUserContext);
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
      <main className="p-3">
        <h2 className="uppercase text-3xl text-center dm-serif-display-regular color-b">
          Olá, {user.username}
        </h2>
        <p className="text-center text-lg libre-baskerville-regular italic md:w-[70%] md:mx-auto lg:w-[50%]">
          Seja bem vindo a área administrativa da EDEN Hotels aqui você poderá
          monitorar as reservas dos clientes
        </p>
        <ReservesTable />
        {user.type === "SUPER_USER" ? <UsersTable /> : null}
        <div id="user-account-area" className="mt-5">
          <h2 className="text-center text-xl uppercase color-b font-bold libre-baskerville-regular py-3 md:text-center">
            Sua conta
          </h2>
          <div
            id="options-area"
            className="flex flex-col gap-3 md:flex-row md:justify-center items-center"
          >
            <button
              type="button"
              className="w-full border-color-b border-1 max-w-[250px] py-2 color-b focus:scale-105 transition-all ease-in duration-300 libre-baskerville-regular font-bold uppercase text-center cursor-pointer md:px-8"
              onClick={() => {
                setModalUserStatus(true);
              }}
            >
              Editar dados
            </button>
            <Link
              to="/admin/logout"
              className="w-full border-color-b border-1 max-w-[250px] py-2 color-b focus:scale-105 transition-all ease-in duration-300 libre-baskerville-regular font-bold uppercase text-center cursor-pointer md:px-8"
            >
              Terminar sessão
            </Link>
            <DeleteAccountBtn className="w-full border-color-b max-w-[250px] border-1 py-2 color-b focus:scale-105 transition-all ease-in duration-300 libre-baskerville-regular font-bold uppercase text-center cursor-pointer md:px-8" />
          </div>
        </div>
      </main>
      <Footer />
      <ModalUser />
    </>
  );
}

export default AdminDashboard;
