<?php
    namespace App\Backend;
    class FormFields {
        public static function validate(array $data, array $fields): array {
            $errors = [];
            foreach ($fields as $field) {
                if (!isset($data[$field]) || $data[$field] === "") {
                    $errors[] = "O campo '$field' é obrigatório!";
                }
            }

            return $errors;
        }
    }
?>