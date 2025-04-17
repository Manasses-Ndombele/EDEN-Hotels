<?php
    namespace App\Backend;
    require_once __DIR__ . "/../config/db.php";

    class Reserves {
        public function create(string $client_name, string $phonenumber, string $hotel_country, string $start_date, string $end_date, string $message = "NADA INFORMADO") {
            $db = new \Database();
            $stmt = $db->conn->prepare("INSERT INTO `Reserves`
                (`client_name`, `phonenumber`, `hotel_country`, `start_date`, `end_date`, `message`, `status`)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            ");

            $default_status = "RESERVADO";
            $stmt->bind_param("sssssss", $client_name, $phonenumber, $hotel_country, $start_date, $end_date, $message, $default_status);
            if ($stmt->execute()) {
                $datas = [
                    "success" => true,
                    "id" => $db->conn->insert_id
                ];

                $stmt->close();
                $db->conn->close();
                return $datas;
            } else {
                $datas = [
                    "success" => false,
                    "error" => $stmt->error
                ];

                $stmt->close();
                $db->conn->close();
                return $datas;
            }
        }

        public function get_reserve(int $id=0, bool $all=false) {
            $db = new \Database();
            if ($all) {
                $sqlQuery = "SELECT * FROM `Reserves`";
                $results = $db->conn->query($sqlQuery);
                $reserves = [];
                while ($row = $results->fetch_assoc()) {
                    $reserves[] = $row;
                }

                foreach ($reserves as $reserve) {
                    $this->refresh_status($reserve["id"], $reserve["status"], $reserve["start_date"], $reserve["end_date"]);
                }

                $db->conn->close();
                return $reserves;
            } else {
                $stmt = $db->conn->prepare("SELECT * FROM `Reserves` WHERE `id` = ?");
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
            $stmt = $db->conn->prepare("UPDATE `Reserves` SET `client_name` = ?, `phonenumber` = ?, `hotel_contry` = ?, `start_date` = ?, `end_date` = ?, `message` = ?, `status` = ? WHERE `id` = ?");
            $client_name = $datas["client_name"];
            $phonenumber = $datas["phonenumber"];
            $hotel_country = $datas["hotel_country"];
            $start_date = $datas["start_date"];
            $end_date = $datas["end_date"];
            $message = $datas["message"];
            $status = $datas["status"];
            $stmt->bind_param("sssssssss", $client_name, $phonenumber, $hotel_country, $start_date, $end_date, $message, $status, $id);
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
            $db = new \Database();
            $stmt = $db->conn->prepare("SELECT (`status`) FROM `Reserves` WHERE `id` = ?");
            $stmt->bind_param("i", $id);
            $stmt->execute();
            $result = $stmt->get_result();
            if ($row = $result->fetch_assoc()) {
                if ($row["status"] === "EXPIRADO") {
                    $stmt->close();
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
            } else {
                $stmt->close();
                $db->conn->close();
                return false;
            }
        }

        public function refresh_status(int $id, string $status, string $startDate, string $endDate) {
            if ($status === "RESERVADO" || $status === "EM ESTADIA") {
                $actual_date = new \DateTime();
                $actual_date->setTime(0, 0);
                $start_date = new \DateTime($startDate);
                $start_date->setTime(0, 0);
                $end_date = new \DateTime($endDate);
                $end_date->setTime(0, 0);
                if ($actual_date >= $start_date && $actual_date <= $end_date) {
                    $newStatus = "EM ESTADIA";
                } else if ($actual_date > $end_date) {
                    $newStatus = "EXPIRADO";
                } else {
                    $newStatus = null;
                }

                if ($newStatus !== null) {
                    $db = new \Database();
                    $stmt = $db->conn->prepare("UPDATE `Reserves` SET `status` = ? WHERE `id` = ?");
                    $stmt->bind_param("si", $newStatus, $id);
                    if ($stmt->execute()) {
                        $stmt->close();
                        $db->conn->close();
                    } else {
                        $stmt->close();
                        $db->conn->close();
                    }
                }
            }
        }
    }
?>