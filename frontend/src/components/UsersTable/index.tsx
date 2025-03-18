import { useState, useEffect } from "react";
import api from "../../services/api";

function UsersTable() {
  const [loading, setLoading] = useState(true);
  const [usersDatas, setUsersDatas] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
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
          console.log(response.data.message);
        } else {
          console.log(`Status: ${response.status}`);
          console.log(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
        </tr>
      </thead>
      <tbody>
        {usersDatas.length !== 0 ? (
          usersDatas.map((users, index) => (
            <tr key={index}>
              <td>{users["username"]}</td>
              <td>{users["email"]}</td>
              <td>{users["active"] === 1 ? "ACTIVADO" : "DESATIVADO"}</td>
              <td>{users["type"]}</td>
              <td>{users["created_at"]}</td>
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
