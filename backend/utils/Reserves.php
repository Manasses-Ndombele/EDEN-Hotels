<?php
    namespace App\Utils;
    require "../vendor/autoload.php";
    use App\Backend\Config;

    class Reserves {
        public $db;
        public function __construct() {
            $this->db = new Database;
        }

        public function create(string $client_name, int $phonenumber, string $hotel_country, int $stay_time, string $datetime, string $message = null) {
            if ($message) {
                $stmt = $this->db->conn->prepare("INSERT INTO Reserves
                    (client_name, phonenumber, hotel_country, stay_time, datetime, message)
                    VALUES (?, ?, ?, ?, ?, ?)
                ");

                $stmt->bind_param('sissss', $client_name, $phonenumber, $hotel_country, $stay_time, $datetime, $message);
                if ($stmt->execute()) {
                    echo "Reserva criada com sucesso!";
                    $stmt->close();
                    $this->db->conn->close();
                    return true;
                } else {
                    echo "Não foi possível criar a reserva " . $stmt->error;
                    $stmt->close();
                    $this->db->conn->close();
                    return false;
                }
            }
        }

        public function get_reserve(int $id=0, bool $all=false) {
            if ($all === true) {
                $sqlQuery = "SELECT * FROM Reserves LIMIT 30";
                $results = $this->db->conn->query($sqlQuery);
                $reserves = [];
                while ($row = $results->fetch_assoc()) {
                    $reserves[] = $row;
                }

                $this->db->conn->close();
                return $reserves;
            } else {
                $stmt = $this->db->conn->prepare("SELECT (client_name, phonenumber, hotel_country, stay_time, datetime, message, status) FROM Reserves WHERE id = ?");
                $stmt->bind_param("i", $id);
                $stmt->execute();
                $result = $stmt->get_result();
                if ($row = $result->fetch_assoc()) {
                    $stmt->close();
                    $this->db->conn->close();
                    return $row;
                } else {
                    $stmt->close();
                    $this->db->conn->close();
                    return null;
                }
            }
        }

        public function update_reserve(int $id, array $datas) {
            $stmt = $this->db->conn->prepare("UPDATE Reserves SET client_name = ?, phonenumber = ?, hotel_contry = ?, stay_time = ?, datetime = ?, message = ?, status = ? WHERE id = ?");
            $stmt->bind_param("sisissssi", $datas["client_name"], $datas["phonenumber"], $datas["hotel_country"], $data["stay_time"], $data["datetime"], $data["message"], $data["status"], $id);

            if ($stmt->execute()) {
                $stmt->close();
                $this->db->conn->close();
                return true;
            } else {
                $stmt->close();
                $this->db->conn->close();
                return false;
            }
        }

        public function delete_reserve(int $id) {
            $stmt = $this->db->conn->prepare("DELETE FROM Reserves WHERE id = ?");
            $stmt->bind_param("i", $id);

            if ($stmt->execute()) {
                $stmt->close();
                $this->db->conn->close();
                return true;
            } else {
                $stmt->close();
                $this->db->conn->close();
                return false;
            }
        }
    }
?>