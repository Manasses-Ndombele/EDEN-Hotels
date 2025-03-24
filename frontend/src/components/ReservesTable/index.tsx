import { useState, useEffect, useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import api from "../../services/api";
import UserContext from "../../services/UserContext";
import ModalContext from "../../services/ModalContext";

function ReservesTable() {
  const [loading, setLoading] = useState(true);
  const [loadingMsg, setLoadingMsg] = useState(
    "Carregando dados das reservas..."
  );
  const [reservesDatas, setReservesDatas] = useState([]);
  const [updateTable, setUpdateTable] = useState(false);
  const { loggedIn, user } = useContext(UserContext);
  const { setModalStatus, setModalTitle, setModalMessage } = useContext(ModalContext);
  function deleteReserve(id: number) {
    const answer = window.confirm(
      "Esta acção é irreversível, tem certeza que deseja eliminar a reserva?"
    );

    if (answer) {
      const token = localStorage.getItem("token");
      api
        .delete(`/deletar-reserva?id=${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 200 && response.data.success) {
            setModalTitle(response.data.message);
            setModalMessage("A reserva foi eliminada com sucesso!");
            setModalStatus(true);
            setUpdateTable(true);
          } else {
            setModalTitle(response.data.message);
            setModalMessage(
              "Não é permitido eliminar reservas que ainda não foram expiradas, espere o cliente iniciar e finalizar o tempo de estadia para que o estado seja automaticamente atualizado para <strong>'Expirado'<strong/>"
            );

            setModalStatus(true);
          }
        })
        .catch((error) => {
          console.error(error);
          setModalTitle("Erro inesperado!");
          setModalMessage(
            "Não foi possível eliminar a reserva por enquanto tente novamente mais tarde!"
          );

          setModalStatus(true);
        });
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (loggedIn && Object.keys(user).length !== 0 && token !== null) {
      api
        .get("/reservas", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.status === 200 && response.data.success) {
            setReservesDatas(response.data.datas);
            setLoading(false);
            setLoadingMsg("");
            setUpdateTable(false);
          } else {
            setLoadingMsg("Não foi possível carregar os dados das reservas...");
            setUpdateTable(false);
          }
        })
        .catch((error) => {
          console.log(error);
          setUpdateTable(false);
        });
    }
  }, [loggedIn, user, updateTable]);

  if (loading) {
    return <div>{loadingMsg}</div>;
  }

  return (
    <div id="reserves-table-area" className="overflow-auto max-h-[30rem] md:mt-10">
      <table className="xl:mx-auto">
        <caption className="text-left text-xl uppercase color-b font-bold libre-baskerville-regular py-3 xl:text-center">
          Reservas
        </caption>
        <thead className="bg-color-a color-e libre-baskerville-regular">
          <tr>
            <th className="text-left p-2">Nome</th>
            <th className="text-left p-2">Telefone</th>
            <th className="whitespace-nowrap text-left p-2">Hospedagem para</th>
            <th className="text-left p-2">Início</th>
            <th className="text-left p-2">Fim</th>
            <th className="text-left p-2">Estado</th>
            <th className="text-left p-2">Mensagem</th>
            <th className="text-left py-2 px-4">Ação</th>
          </tr>
        </thead>
        <tbody>
          {reservesDatas.length !== 0 ? (
            reservesDatas.map((reserve, index) => (
              <tr key={index}>
                <td className="border-1 p-2 whitespace-nowrap libre-baskerville-regular">
                  {reserve["client_name"]}
                </td>
                <td className="border-1 p-2 whitespace-nowrap libre-baskerville-regular">
                  {reserve["phonenumber"]}
                </td>
                <td className="border-1 p-2 whitespace-nowrap libre-baskerville-regular">
                  {reserve["hotel_country"]}
                </td>
                <td className="border-1 p-2 whitespace-nowrap libre-baskerville-regular">
                  {reserve["start_date"]}
                </td>
                <td className="border-1 p-2 whitespace-nowrap libre-baskerville-regular">
                  {reserve["end_date"]}
                </td>
                <td className="border-1 p-2 whitespace-nowrap libre-baskerville-regular">
                  {reserve["status"]}
                </td>
                <td className="border-1 p-2 whitespace-nowrap libre-baskerville-regular">
                  <textarea
                    readOnly={true}
                    value={
                      reserve["message"] !== ""
                        ? reserve["message"]
                        : "Não informado"
                    }
                  ></textarea>
                </td>
                <td className="border-1 p-2">
                  <button
                    type="button"
                    className="color-c cursor-pointer w-full"
                    onClick={() => {
                      deleteReserve(reserve["id"]);
                    }}
                  >
                    <MdDeleteForever className="text-center text-xl" />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr key="1">
              <td colSpan={7}>Não tem nenhuma reserva registrada ainda!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ReservesTable;
