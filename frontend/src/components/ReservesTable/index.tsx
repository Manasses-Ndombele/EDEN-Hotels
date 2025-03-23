import { useState, useEffect, useContext } from "react";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import api from "../../services/api";
import UserContext from "../../services/UserContext";

function ReservesTable() {
  const [loading, setLoading] = useState(true);
  const [reservesDatas, setReservesDatas] = useState([]);
  const [updateTable, setUpdateTable] = useState(false);
  const { loggedIn, user } = useContext(UserContext);
  function deleteReserve(id: number) {
    const token = localStorage.getItem("token");
    api
      .delete(`/deletar-reserva?id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
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
            console.log(response.data.message);
            setLoading(false);
            setUpdateTable(false);
          } else {
            console.log(`Status ${response.status}`);
            console.log(response.data.message);
            setUpdateTable(false);
          }
        })
        .catch((error) => {
          console.log(error);
          setUpdateTable(false);
        });
    } else {
      console.log("Não estamos caindo na condição que executa a requesição");
    }
  }, [loggedIn, user, updateTable]);

  if (loading) {
    return <div>Carregando reservas...</div>;
  }

  return (
    <div id="reserves-table-area" className="overflow-auto">
      <table>
        <caption className="text-left text-xl uppercase color-b font-bold libre-baskerville-regular py-3">Reservas</caption>
        <thead className="bg-color-a color-e libre-baskerville-regular">
          <tr>
            <th className="text-left p-2">Nome</th>
            <th className="text-left p-2">Telefone</th>
            <th className="whitespace-nowrap text-left p-2">Hospedagem para</th>
            <th className="text-left p-2">Início</th>
            <th className="text-left p-2">Fim</th>
            <th className="text-left p-2">Estado</th>
            <th className="text-left p-2">Mensagem</th>
            <th className="text-left py-2 px-4">Ações</th>
          </tr>
        </thead>
        <tbody>
          {reservesDatas.length !== 0 ? (
            reservesDatas.map((reserve, index) => (
              <tr key={index}>
                <td className="border-1 p-2 whitespace-nowrap libre-baskerville-regular">{reserve["client_name"]}</td>
                <td className="border-1 p-2 whitespace-nowrap libre-baskerville-regular">{reserve["phonenumber"]}</td>
                <td className="border-1 p-2 whitespace-nowrap libre-baskerville-regular">{reserve["hotel_country"]}</td>
                <td className="border-1 p-2 whitespace-nowrap libre-baskerville-regular">{reserve["start_date"]}</td>
                <td className="border-1 p-2 whitespace-nowrap libre-baskerville-regular">{reserve["end_date"]}</td>
                <td className="border-1 p-2 whitespace-nowrap libre-baskerville-regular">{reserve["status"]}</td>
                <td className="border-1 p-2 whitespace-nowrap libre-baskerville-regular">
                  <textarea readOnly={true}>
                    {reserve["message"] !== ""
                      ? reserve["message"]
                      : "Não informado"}
                  </textarea>
                </td>
                <td className="border-1 p-2 text-xl">
                  <section className="flex items-center gap-4 w-full">
                    <button type="button" className="color-c cursor-pointer">
                      <FaRegPenToSquare />
                    </button>
                    <button
                      type="button"
                      className="color-c cursor-pointer"
                      onClick={() => {
                        deleteReserve(reserve["id"]);
                      }}
                    >
                      <MdDeleteForever />
                    </button>
                  </section>
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
