<?php
    require __DIR__ . "/../../../config/cors.php";
    require __DIR__ . "/../../../vendor/autoload.php";
    use App\Backend\Users;
    use App\Backend\Response;
    use App\Backend\Auth;
    use App\Backend\SuperUser;

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $user = Auth::verify_token();
        if (!$user) {
            echo Response::json(403, "Token inválido", ["success" => false]);
            exit;
        }

        if (!SuperUser::verify($user["email"])) {
            echo Response::json(403, "Autorização não concedida!", ["success" => false]);
            exit;
        }

        $user = new Users();
        $requestNullData = false;
        isset($_POST["username"])
        ? $username = $_POST["username"]
        : $requestNullData = true;
        isset($_POST["email"])
        ? $email = $_POST["email"]
        : $requestNullData = true;
        isset($_POST["password"])
        ? $password = $_POST["password"]
        : $requestNullData = true;
        if (!$requestNullData) {
            $queryResult = $user->create(
                $username=$username,
                $email=$email,
                $password=$password
            );
        } else {
            echo Response::json(400, "Dados do usuário inválidos!", ["success" => false]);
        }

        if ($queryResult["success"]) {
            echo Response::json(200, "Usuário criado com sucesso!", [
                "success" => true,
                "user_id" => $queryResult["id"]
            ]);
        } else {
            echo Response::json(200, "Não foi possível cadastrar o usuário.", ["success" => false]);
        }

        exit;
    } else {
        echo Response::json(405, "Método da requesição inválido.", ["success" => false]);
        exit;
    }
?>