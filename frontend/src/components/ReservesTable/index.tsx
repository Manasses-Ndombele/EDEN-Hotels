import { useState, useEffect } from "react";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import api from "../../services/api";

function ReservesTable() {
  const [loading, setLoading] = useState(true);
  const [reservesDatas, setReservesDatas] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
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
        } else {
          console.log(`Status ${response.status}`);
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            <th>Marcação</th>
            <th>Estadia de</th>
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
                <td>{reserve["datetime"]}</td>
                <td>{reserve["stay_time"]} dias</td>
                <td>{reserve["status"]}</td>
                <td>
                  {reserve["message"] !== ""
                    ? reserve["message"]
                    : "Não informado"}
                </td>
                <td>
                  <button type="button"><FaRegPenToSquare /></button>
                  <button type="button"><MdDeleteForever /></button>
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
