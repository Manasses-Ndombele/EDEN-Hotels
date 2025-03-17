<?php
    namespace App\Backend;
    require_once __DIR__ . "/../config/db.php";

    class Users {
        public function create(string $username, string $email, string $password) {
            $db = new \Database();
            $db->createRow($table="Users", $datas=[
                "username" => $username,
                "email" => $email,
                "password" => $password
            ]);
        }

        public function get_user(string $email="", bool $all=false) {
            $db = new \Database();
            if ($all) {
                $sqlQuery = "SELECT * FROM `Users` WHERE `type` = 'ADMIN' LIMIT 30";
                $results = $db->conn->query($sqlQuery);
                $users = [];
                while ($row = $results->fetch_assoc()) {
                    $users[] = $row;
                }

                return $users;
            } else {
                $stmt = $db->conn->prepare("SELECT * FROM `Users` WHERE `email` = ?");
                $stmt->bind_param('s', $email);
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

        public function update_user(string $email, array $datas) {
            $db = new \Database();
            $stmt = $db->conn->prepare("UPDATE `Users` SET `username` = ?, `email` = ? WHERE `email` = ?");
            $newUsername = $datas["username"];
            $newEmail = $datas["email"];
            $stmt->bind_param('sss', $newUsername, $newEmail, $email);
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

        public function delete_user(string $email) {
            $db = new \Database();
            $stmt = $db->conn->prepare("DELETE FROM `Users` WHERE `email` = ?");
            $stmt->bind_param('s', $email);
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