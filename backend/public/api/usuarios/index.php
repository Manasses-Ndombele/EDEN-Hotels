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

    $users = new Users();
    $users_datas = $users::get_user(0, true);
    echo Response::json(200, "Usuários encontrados sucesso!", [
        "success" => true,
        "datas" => $users_datas
    ]);
?>