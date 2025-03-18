<?php
    require __DIR__ . "/../../../config/cors.php";
    require __DIR__ . "/../../../vendor/autoload.php";
    use App\Backend\Users;
    use App\Backend\Response;

    function validateFields(array $data, array $fields): array {
        $errors = [];
        foreach ($fields as $field) {
            if (!isset($data[$field]) || $data[$field] === "") {
                $errors[] = "O campo '$field' é obrigatório!";
            }
        }

        return $errors;
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $requestFields = ["username", "email", "password"];
        $validationErrors = validateFields($_POST, $requestFields);
        if (!empty($validationErrors)) {
            echo Response::json(400, "Dados do usuário inválidos!", [
                "success" => false,
                "errors" => $validationErrors,
                "form" => [$_POST["username"], $_POST["email"], $_POST["password"]]
            ]);

            exit;
        } else {
            $username = htmlspecialchars($_POST["username"]);
            $email = htmlspecialchars($_POST["email"]);
            $password = htmlspecialchars($_POST["password"]);
            $user = new Users();
            $queryResult = $user->create(
                $username=$username,
                $email=$email,
                $password=$password
            );

            if ($queryResult["success"]) {
                echo Response::json(200, "Usuário criado com sucesso!", [
                    "success" => true,
                    "id" => $queryResult["id"]
                ]);

                exit;
            } else {
                echo Response::json(200, "Não foi possível cadastrar o usuário.", [
                    "success" => false,
                    "error" => $queryResult["error"]
                ]);

                exit;
            }
        }
    } else {
        echo Response::json(405, "Método da requesição inválido.", ["success" => false]);
        exit;
    }
?>