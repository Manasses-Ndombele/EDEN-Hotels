<?php
    require "../vendor/autoload.php";
    use App\Backend\Config;

    class SuperUser {
        public static function verify(string $email) {
            $db = new Database();
            $stmt = $db->conn->prepare("SELECT type FROM Users WHERE email = ?");
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