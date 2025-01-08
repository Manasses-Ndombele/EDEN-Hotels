<?php
    namespace App\Utils;
    class Response {
        public static function json(int $status=200, string $message="", array $data=null) {
            header("Content-Type", "application/json");
            return json_encode([
                "status" => $status,
                "message" => $message,
                "data" => $data
            ]);
        }
    }
?>