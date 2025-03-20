import { useState, useEffect, useContext } from "react";
import api from "../../services/api";
import UserContext from "../../services/UserContext";

function UsersTable() {
  const [loading, setLoading] = useState(true);
  const [usersDatas, setUsersDatas] = useState([]);
  const { loggedIn, user } = useContext(UserContext);
  const [updateTable, setUpdateTable] = useState(false);
  const token = localStorage.getItem("token");
  function toggleUserStatus(email: string, active: number) {
    const new_status = active === 1 ? 0 : 1;
    api
      .patch(
        `/atualizar-estado?email=${email}&active=${new_status}`,
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
          setUpdateTable(true);
        } else {
          console.log(`Status: ${response.status}`);
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function deleteUser(email: string) {
    api
      .delete(`/deletar-usuario?email=${email}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200 && response.data.success) {
          console.log("SUCESSO!");
          console.log(response.data.message);
          setUpdateTable(true);
        } else {
          console.log("FRACASSO!");
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (loggedIn && Object.keys(user).length !== 0 && token !== null) {
      if (user.type === "SUPER_USER") {
        api
          .get("/usuarios", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            if (response.status === 200 && response.data.success) {
              setUsersDatas(response.data.datas);
              setLoading(false);
              setUpdateTable(false);
              console.log(response.data.message);
            } else {
              console.log(`Status: ${response.status}`);
              console.log(response.data.message);
              setUpdateTable(false);
            }
          })
          .catch((error) => {
            console.log(error);
            setUpdateTable(false);
          });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateTable]);

  if (loading) {
    return <div>Carregando usuários...</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Usuário</th>
          <th>Email</th>
          <th>Estado</th>
          <th>Conta</th>
          <th>Criado em</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {usersDatas.length !== 0 ? (
          usersDatas.map((users, index) => (
            <tr key={index}>
              <td>{users["username"]}</td>
              <td>{users["email"]}</td>
              <td>
                {Number.parseInt(users["active"]) === 1
                  ? "ACTIVADO"
                  : "DESATIVADO"}
              </td>
              <td>{users["type"]}</td>
              <td>{users["created_at"]}</td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    toggleUserStatus(
                      users["email"],
                      Number.parseInt(users["active"])
                    );
                  }}
                >
                  {Number.parseInt(users["active"]) === 1
                    ? "Desativar conta"
                    : "Ativar conta"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    deleteUser(users["email"]);
                  }}
                >
                  Eliminar conta
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr key="1">
            <td colSpan={5}>Não foi registrado nenhum usuário!</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default UsersTable;
