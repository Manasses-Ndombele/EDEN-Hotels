import { useState, useEffect, useContext } from "react";
import api from "../../services/api";
import UserContext from "../../services/UserContext";

function UsersTable() {
  const [loading, setLoading] = useState(true);
  const [usersDatas, setUsersDatas] = useState([]);
  const { loggedIn, user } = useContext(UserContext);
  const [updateTable, setUpdateTable] = useState(false);
  function toggleUserStatus(email: string, active: number) {
    const token = localStorage.getItem("token");
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
    const token = localStorage.getItem("token");
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
    const token = localStorage.getItem("token");
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
      } else {
        console.log("Este usuário não é super usuário!");
      }
    } else {
      console.log("Dados de autenticação inválidos")
    }
  }, [loggedIn, user, updateTable]);

  if (loading) {
    return <div>Carregando usuários...</div>;
  }

  return (
    <div id="users-table-area" className="overflow-auto mt-5">
      <table>
        <caption className="text-left text-xl uppercase color-b font-bold libre-baskerville-regular py-3">Contas administrativas</caption>
        <thead className="bg-color-a color-e libre-baskerville-regular">
          <tr>
            <th className="text-left p-2">Usuário</th>
            <th className="text-left p-2">Email</th>
            <th className="text-left p-2">Estado</th>
            <th className="text-left p-2">Conta</th>
            <th className="whitespace-nowrap text-left p-2">Criado em</th>
            <th className="text-left p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {usersDatas.length !== 0 ? (
            usersDatas.map((users, index) => (
              <tr key={index}>
                <td className="border-1 p-2 whitespace-nowrap libre-baskerville-regular">{users["username"]}</td>
                <td className="border-1 p-2 whitespace-nowrap libre-baskerville-regular">{users["email"]}</td>
                <td className="border-1 p-2 whitespace-nowrap libre-baskerville-regular">
                  {Number.parseInt(users["active"]) === 1
                    ? "ACTIVADO"
                    : "DESATIVADO"}
                </td>
                <td className="border-1 p-2 whitespace-nowrap libre-baskerville-regular">{users["type"]}</td>
                <td className="border-1 p-2 whitespace-nowrap libre-baskerville-regular">{users["created_at"]}</td>
                <td className="border-1 p-2 whitespace-nowrap libre-baskerville-regular">
                  <section className="flex items-center gap-4">
                    <button
                      type="button"
                      className="uppercase font-bold color-c"
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
                      className="uppercase font-bold color-c"
                      onClick={() => {
                        deleteUser(users["email"]);
                      }}
                    >
                      Eliminar conta
                    </button>
                  </section>
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
    </div>
  );
}

export default UsersTable;
