<?php
    namespace App\Backend;
    class Response {
        public static function json(int $status=200, string $message="", array $datas=null) {
            http_response_code($status);
            $response = ["message" => $message];
            if ($datas) {
                foreach ($datas as $key => $data) {
                    $response[$key] = $data;
                }
            }

            return json_encode($response);
        }
    }
?>