<?php
    require "../../../vendor/autoload.php";
    use App\Utils\Users;
    use App\Utils\Response;
    use App\Utils\Auth;
    use App\Utils\SuperUser;

    $headers = getallheaders();
    if (!isset($headers["Authorization"])) {
        echo Response::json(403, "Autorização não concedida!", ["success" => true]);
        exit;
    }

    $token = str_replace($headers["Authorization"], "Bearer ", "");
    $user = Auth::verify_token($token);
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
        exit;
    }

    if ($queryResult["success"]) {
        echo Response::json(200, "Usuário criado com sucesso!", [
            "success" => true,
            "user_id" => $queryResult["id"]
        ]);

        exit;
    } else {
        echo Response::json(200, "Não foi possível cadastrar o usuário.", ["success" => false]);
        exit;
    }
?>