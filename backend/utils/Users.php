<?php
    namespace App\Utils;
    require "../vendor/autoload.php";
    use App\Backend\Config;

    class Users {
        public $db;
        public function __construct() {
            $this->$db = new Database();
        }

        public static function create(string $username, string $email, string $password) {
            $this->db->createRow($table="Users", $datas=[
                "username" => $username,
                "email" => $email,
                "password" => $password
            ]);

            $this->db->conn->close();
        }

        public static function get_user(string $email="", bool $all=false) {
            if ($all == true) {
                $sqlQuery = "SELECT * FROM Users WHERE type = 'ADMIN' LIMIT 30";
                $results = $this->db->conn->query($sqlQuery);
                $users = [];
                while ($row = $results->fetch_assoc()) {
                    $users[] = $row;
                }

                $stmt->close();
                $this->db->conn->close();
                return $users;
            } else {
                $stmt = $this->db->conn->prepare("SELECT * FROM Users WHERE email = ?");
                $stmt->bind_param('s', $email);
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

        public static function update_user(string $email, array $datas) {
            $stmt = $this->db->conn->prepare("UPDATE Users SET username = ?, email = ? WHERE email = ?");
            $stmt->bind_param('sss', $datas['username'], $datas['email'], $email);
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

        public static function delete_user(string $email) {
            $stmt = $this->db->conn->prepare("DELETE FROM Users WHERE email = ?");
            $stmt->bind_param('s', $email);
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