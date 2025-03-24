import { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import BrandArea from "../components/BrandArea";
import RegisterForm from "../components/RegisterForm";
import UserContext from "../services/UserContext";

function Register() {
  const navigate = useNavigate();
  const { loggedIn, user } = useContext(UserContext);

  useEffect(() => {
    if (
      loggedIn &&
      Object.keys(user).length !== 0 &&
      localStorage.getItem("token") !== null
    ) {
      console.log("O usuário está logado!");
      navigate("/admin/dashboard");
    }
  }, [loggedIn, user, navigate]);

  return (
    <main className="bg-color-e h-[100vh] max-h-[140vh] mb-30">
      <div className="bg-color-a p-3">
        <BrandArea />
      </div>
      <div className="my-3 px-3 md:w-[80%] mx-auto max-w-[500px]">
        <h2 className="dm-serif-display-regular text-3xl color-b uppercase text-center">Registro</h2>
        <p className="libre-baskerville-regular text-lg color-a italic md:text-center">Seja bem vindo insira os seus dados de usuário de uma conta autorizada para acessar a área administrativa do EDEN Hotels.</p>
      </div>
      <RegisterForm />
      <Link to="/admin/login" className="text-center my-4 w-full block color-a font-bold libre-baskerville-regular">Tem uma conta? Entrar</Link>
    </main>
  );
}

export default Register;
