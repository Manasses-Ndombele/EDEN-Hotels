import { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import BrandArea from "../components/BrandArea";
import LoginForm from "../components/LoginForm";
import UserContext from "../services/UserContext";

function Login() {
  const navigate = useNavigate();
  const { loggedIn, user } = useContext(UserContext);

  useEffect(() => {
    if (
      loggedIn &&
      Object.keys(user).length === 0 &&
      localStorage.getItem("token") !== null
    ) {
      console.log("O usuário está logado!");
      navigate("/admin/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="bg-color-e min-h-[100vh] pb-30 bg-color-d">
      <div className="bg-color-a p-3">
        <BrandArea />
      </div>
      <div className="my-3 px-3 md:w-[80%] mx-auto max-w-[500px]">
        <h2 className="dm-serif-display-regular text-3xl color-b uppercase text-center">Entrar</h2>
        <p className="libre-baskerville-regular md:text-center text-lg color-a italic">Seja bem vindo insira os seus dados de usuário de uma conta autorizada para acessar a área administrativa do EDEN Hotels.</p>
      </div>
      <LoginForm />
      <Link to="/admin/register" className="text-center my-4 w-full block color-a font-bold libre-baskerville-regular">Não tem uma conta? Criar</Link>
    </main>
  );
}

export default Login;
