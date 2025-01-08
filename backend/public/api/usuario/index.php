<?php
    require "../../../vendor/autoload.php";
    use App\Utils\Response;
    use App\Utils\Auth;
    use App\Utils\Users;
    use App\Utils\SuperUser;

    $headers = getallheaders();
    if (!isset($headers)) {
        echo Response::json(403, "Autorização não concedida!", ["success" => false]);
        exit;
    }

    $token = str_replace($headers["Authorization"], "Bearer ", "");
    $user = Auth::verify_token($token);
    if (!$user) {
        echo Response::json(403, "Token inválido!", ["success" => false]);
        exit;
    }

    if (!SuperUser::verify($user["email"])) {
        echo Response::json(403, "Autorização não concedida!", ["success" => false]);
        exit;
    }

    if (!isset($_GET["email"])) {
        echo Response::json(403, "Email não informado", ["success" => false]);
        exit;
    } else {
        $email = htmlspecialchars($_GET["email"]);
    }

    $users = new Users();
    $users_datas = $users::get_user($email);
    if ($users_datas) {
        echo Response::json(200, "Consulta de usuário bem sucedida!", [
            "success" => true,
            "datas" => $users_datas
        ]);

        exit;
    } else {
        echo Response::json(200, "Não foi possível consultar o usuário requerida!", [
            "success" => false
        ]);

        exit;
    }
?>