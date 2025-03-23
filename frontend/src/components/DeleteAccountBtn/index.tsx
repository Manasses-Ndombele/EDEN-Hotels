import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import UserContext from "../../services/UserContext";

interface Props {
  className: string
}

function DeleteAccountBtn({ className }: Props) {
  const { user, setLoggedIn, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  function deleteUser() {
    const token = localStorage.getItem("token");
    api
      .delete(`/deletar-usuario?email=${user.email}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200 && response.data.success) {
          console.log("SUCESSO!");
          console.log(response.data.message);
          localStorage.removeItem("token");
          setLoggedIn(false);
          setUser({
            username: "",
            email: "",
            type: "",
            created_at: "",
          });

          navigate("/admin/login");
        } else {
          console.log("FRACASSO!");
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <button
      className={className}
      type="button"
      onClick={() => {
        deleteUser();
      }}
    >
      Eliminar conta
    </button>
  );
}

export default DeleteAccountBtn;
