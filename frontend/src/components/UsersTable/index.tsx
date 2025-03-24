import { useState, useEffect, useContext } from "react";
import api from "../../services/api";
import UserContext from "../../services/UserContext";
import ModalContext from "../../services/ModalContext";

function UsersTable() {
  const [loading, setLoading] = useState(true);
  const [usersDatas, setUsersDatas] = useState([]);
  const { loggedIn, user } = useContext(UserContext);
  const [updateTable, setUpdateTable] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState(
    "Carregando dados das reservas..."
  );

  const { setModalStatus, setModalTitle, setModalMessage } = useContext(ModalContext);
  function toggleUserStatus(email: string, active: number) {
    let question = "";
    let new_status = null;
    let success_msg = "";
    let error_msg = "";
    if (active === 1) {
      question = "Tem certeza que deseja desativar a conta do usuário?";
      new_status = 0;
      success_msg = "A conta do usuário foi desativada com sucesso!";
      error_msg =
        "Não foi possúvel desativar a conta do usuário por enquanto, tente novamente mais tarde!";
    } else {
      question = "Tem certeza que deseja ativar a conta do usuário?";
      new_status = 1;
      success_msg = "A conta do usuário foi ativada com sucesso!";
      error_msg =
        "Não foi possível ativar a conta do usuário por enquanto, tente novamente mais tarde!";
    }

    const answer = window.confirm(question);
    if (answer) {
      const token = localStorage.getItem("token");
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
            setModalTitle(response.data.message);
            setModalMessage(success_msg);
            setModalStatus(true);
            setUpdateTable(true);
          } else {
            setModalTitle(response.data.message);
            setModalMessage(error_msg);
            setModalStatus(true);
          }
        })
        .catch((error) => {
          console.log(error);
          setModalTitle("Erro inesperado!");
          setModalMessage(error_msg);
          setModalStatus(true);
        });
    }
  }

  function deleteUser(email: string) {
    const answer = window.confirm(
      "Esta ação é irreversível, tem certeza que deseja eliminar a conta do usuário?"
    );

    if (answer) {
      const token = localStorage.getItem("token");
      api
        .delete(`/deletar-usuario?email=${email}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 200 && response.data.success) {
            setModalTitle(response.data.message);
            setModalMessage("A conta do usuário foi eliminada com sucesso!");
            setModalStatus(true);
            setUpdateTable(true);
          } else {
            setModalTitle(response.data.message);
            setModalMessage(
              "Não foi possível eliminar a conta do usuário por enquanto, tente novamente mais tarde!"
            );

            setModalStatus(true);
          }
        })
        .catch((error) => {
          console.log(error);
          setModalTitle("Erro inesperado");
          setModalMessage(
            "Não foi possível eliminar a conta do usuário por enquanto, tente novamente mais tarde!"
          );

          setModalStatus(true);
        });
    }
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
              setLoadingMsg("");
              setUsersDatas(response.data.datas);
              setLoading(false);
              setUpdateTable(false);
              console.log(response.data.message);
            } else {
              setLoadingMsg("Não foi possível listar os dados dos usuários!");
              setUpdateTable(false);
            }
          })
          .catch((error) => {
            console.error(error);
            setLoadingMsg("Não foi possível carregar os dados dos usuários!");
            setUpdateTable(false);
          });
      }
    }
  }, [loggedIn, user, updateTable]);

  if (loading) {
    return <div>{loadingMsg}</div>;
  }

  return (
    <div id="users-table-area" className="overflow-auto mt-5 max-h-[30rem] md:mt-10">
      <table className="xl:mx-auto">
        <caption className="text-left text-xl uppercase color-b font-bold libre-baskerville-regular py-3 xl:text-center">
          Contas administrativas
        </caption>
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
                <td className="border-1 p-2 whitespace-nowrap libre-baskerville-regular">
                  {users["username"]}
                </td>
                <td className="border-1 p-2 whitespace-nowrap libre-baskerville-regular">
                  {users["email"]}
                </td>
                <td className="border-1 p-2 whitespace-nowrap libre-baskerville-regular">
                  {Number.parseInt(users["active"]) === 1
                    ? "ACTIVADO"
                    : "DESATIVADO"}
                </td>
                <td className="border-1 p-2 whitespace-nowrap libre-baskerville-regular">
                  {users["type"]}
                </td>
                <td className="border-1 p-2 whitespace-nowrap libre-baskerville-regular">
                  {users["created_at"]}
                </td>
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
