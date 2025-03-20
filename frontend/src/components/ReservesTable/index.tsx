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
  const token = localStorage.getItem("token");
  function deleteReserve(id: number) {
    api
      .delete(`/deletar-reserva?id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200 && response.data.success) {
          console.log(response.data.message);
          setUpdateTable(true)
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateTable]);

  if (loading) {
    return <div>Carregando reservas...</div>;
  }

  return (
    <div id="reserves-table-area">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Hospedagem para</th>
            <th>Início</th>
            <th>Fim</th>
            <th>Estado</th>
            <th>Mensagem</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {reservesDatas.length !== 0 ? (
            reservesDatas.map((reserve, index) => (
              <tr key={index}>
                <td>{reserve["client_name"]}</td>
                <td>{reserve["phonenumber"]}</td>
                <td>{reserve["hotel_country"]}</td>
                <td>{reserve["start_date"]}</td>
                <td>{reserve["end_date"]}</td>
                <td>{reserve["status"]}</td>
                <td>
                  {reserve["message"] !== ""
                    ? reserve["message"]
                    : "Não informado"}
                </td>
                <td>
                  <button type="button">
                    <FaRegPenToSquare />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      deleteReserve(reserve["id"]);
                    }}
                  >
                    <MdDeleteForever />
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
