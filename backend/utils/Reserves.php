<?php
    namespace App\Backend;
    require_once __DIR__ . "/../config/index.php";

    class Reserves {
        public function create(string $client_name, int $phonenumber, string $hotel_country, int $stay_time, string $datetime, string $message = null) {
            $db = new \Database();
            if ($message) {
                $stmt = $db->conn->prepare("INSERT INTO `Reserves`
                    (`client_name`, `phonenumber`, `hotel_country`, `stay_time`, `datetime`, `message`)
                    VALUES (?, ?, ?, ?, ?, ?)
                ");

                $stmt->bind_param('sissss', $client_name, $phonenumber, $hotel_country, $stay_time, $datetime, $message);
                if ($stmt->execute()) {
                    echo "Reserva criada com sucesso!";
                    $stmt->close();
                    $db->conn->close();
                    return true;
                } else {
                    echo "Não foi possível criar a reserva " . $stmt->error;
                    $stmt->close();
                    $db->conn->close();
                    return false;
                }
            }
        }

        public function get_reserve(int $id=0, bool $all=false) {
            $db = new \Database();
            if ($all) {
                $sqlQuery = "SELECT * FROM `Reserves` LIMIT 30";
                $results = $db->conn->query($sqlQuery);
                $reserves = [];
                while ($row = $results->fetch_assoc()) {
                    $reserves[] = $row;
                }

                return $reserves;
            } else {
                $stmt = $db->conn->prepare("SELECT (`client_name`, `phonenumber`, `hotel_country`, `stay_time`, `datetime`, `message`, `status`) FROM `Reserves` WHERE `id` = ?");
                $stmt->bind_param("i", $id);
                $stmt->execute();
                $result = $stmt->get_result();
                if ($row = $result->fetch_assoc()) {
                    $stmt->close();
                    $db->conn->close();
                    return $row;
                } else {
                    $stmt->close();
                    $db->conn->close();
                    return null;
                }
            }
        }

        public function update_reserve(int $id, array $datas) {
            $db = new \Database();
            $stmt = $db->conn->prepare("UPDATE `Reserves` SET `client_name` = ?, `phonenumber` = ?, `hotel_contry` = ?, `stay_time` = ?, `datetime` = ?, `message` = ?, `status` = ? WHERE `id` = ?");
            $client_name = $datas["client_name"];
            $phonenumber = $datas["phonenumber"];
            $hotel_country = $datas["hotel_country"];
            $stay_time = $datas["stay_time"];
            $datetime = $datas["datetime"];
            $message = $datas["message"];
            $status = $datas["status"];
            $stmt->bind_param("sisissssi", $client_name, $phonenumber, $hotel_country, $stay_time, $datetime, $message, $status, $id);
            if ($stmt->execute()) {
                $stmt->close();
                $db->conn->close();
                return true;
            } else {
                $stmt->close();
                $db->conn->close();
                return false;
            }
        }

        public function delete_reserve(int $id) {
            $stmt = $db->conn->prepare("DELETE FROM `Reserves` WHERE `id` = ?");
            $stmt->bind_param("i", $id);
            if ($stmt->execute()) {
                $stmt->close();
                $db->conn->close();
                return true;
            } else {
                $stmt->close();
                $db->conn->close();
                return false;
            }
        }
    }
?>