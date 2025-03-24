import { useState, useEffect } from "react";
import api from "../api";
import { UserType } from "../UserContext";

function useAuth() {
  const [user, setUser] = useState<UserType>({
    username: "",
    email: "",
    type: "",
    created_at: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token encontrado na memória: ", token);
    console.log("Tipo: ", typeof token);
    if (token) {
      api
        .post(
          "/sessao",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          if (response.status === 200 && response.data.success) {
            console.log(response.data.message);
            console.log("Usuário logado: ", response.data.user.email);
            console.log("Tipo do usuário logado: ", typeof response.data.user);
            setUser(response.data.user);
          } else {
            console.log(response.data.message);
            console.log("Status: ", response.status);
            if (token === JSON.stringify(response.data.token)) {
              console.log("Os tokens do frontend e do backend são iguais!");
            } else {
              console.log("Os tokens do frontend e do backend são diferentes!");
            }

            localStorage.removeItem("token");
            setUser({
              username: "",
              email: "",
              type: "",
              created_at: "",
            });
          }
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem("token");
          setUser({
            username: "",
            email: "",
            type: "",
            created_at: "",
          });
        });
    }
  }, []);

  return { user, setUser };
}

export default useAuth;
