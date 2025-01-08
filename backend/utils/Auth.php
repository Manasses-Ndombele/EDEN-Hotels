<?php
    namespace App\Utils;
    require "../config/index.php";
    use Firebase\JWT\JWT;
    use Firebase\JWT\Key;

    class Auth {
        private $key = SECRET_KEY;
        public static function verify_token($token) {
            try {
                $decoded = JWT::decode($token, new Key(self::$key, $token, "HS256"));
                return $decoded->data;
            } catch (Exception $e) {
                return false;
            }
        }
    }
?>