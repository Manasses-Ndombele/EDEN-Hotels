<?php
    require "../../../vendor/autoload.php";
    use App\Utils\Response;
    use App\Utils\Users;
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

    if (!isset($_GET["email"])) {
        echo Response::json(403, "Email não informado", ["success" => false]);
        exit;
    } else {
        $email = htmlspecialchars($_GET["email"]);
        if ($email !== $user["email"] or !SuperUser::verify($user["email"])) {
            Response::json(403, "Autorização não concedida!", ["success" => false]);
            exit;
        }
    }

    $user = new Users();
    $user_delete = $user::delete_user($email);
    if ($user_delete) {
        echo Response::json(200, "Conta eliminada com sucesso!", ["success" => true]);
        exit;
    } else {
        echo Response::json(200, "Não foi possível eliminar a conta!", ["success" => false]);
        exit;
    }
?>