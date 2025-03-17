<?php
    namespace App\Backend;
    require_once __DIR__ . "/../config/index.php";
    use Firebase\JWT\JWT;
    use Firebase\JWT\Key;
    use Firebase\JWT\ExpiredException;
    use Exception;

    class Auth {
        public static function verify_token($token) {
            try {
                $decoded = JWT::decode($token, new Key(SECRET_KEY, "HS256"));
                return [
                    "success" => true,
                    "datas" => $decoded->data
                ];
            } catch (ExpiredException $e) {
                return [
                    "success" => false,
                    "error_message" => "Token de autenticação expirado: " . $e,
                    "token" => $token
                ];
            } catch (Exception $e) {
                return [
                    "success" => false,
                    "error_message" => "Token de autenticação incorreto: " . $e,
                    "token" => $token
                ];
            }
        }
    }
?>