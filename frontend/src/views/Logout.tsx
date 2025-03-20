import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../services/UserContext";

function LogoutBtn() {
  const { setLoggedIn, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setUser({
      username: "",
      email: "",
      type: "",
      created_at: "",
    });

    navigate("/admin/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Terminando sessão...</div>;
}

export default LogoutBtn;
