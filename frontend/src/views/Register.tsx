import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    <main>
      <BrandArea />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
        inventore fugiat ipsum molestiae totam magnam ab non neque. Natus
        officia fugit expedita nisi. Vitae, delectus? Eaque fugit esse
        voluptatum molestias.
      </p>
      <RegisterForm />
    </main>
  );
}

export default Register;
