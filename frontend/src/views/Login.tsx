import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    <main>
      <BrandArea />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tempore
        eius aspernatur laborum unde tempora repudiandae provident! Eius iure
        labore laborum unde fuga necessitatibus sapiente, aspernatur
        praesentium, nemo temporibus quas!
      </p>
      <LoginForm />
    </main>
  );
}

export default Login;
