import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BrandArea from "../components/BrandArea";
import RegisterForm from "../components/RegisterForm";
import UserContext from "../services/UserContext";

function Register() {
  const navigate = useNavigate();
  const { loggedIn } = useContext(UserContext);

  useEffect(() => {
    if (loggedIn) {
      console.log("O usuário está logado!");
      navigate("/admin/dashboard");
    }
  }, [loggedIn, navigate])

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
