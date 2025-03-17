<?php
    namespace App\Backend;
    require_once __DIR__ . "/../config/index.php";
    require __DIR__ . "/../vendor/autoload.php";

    class SuperUser {
        public static function verify(string $email) {
            $db = new Database();
            $stmt = $db->conn->prepare("SELECT `type` FROM `Users` WHERE `email` = ?");
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $result = $stmt->get_result();
            if ($row = $result->fetch_assoc()) {
                if ($row["type"] === "SUPER_USER") {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
?>