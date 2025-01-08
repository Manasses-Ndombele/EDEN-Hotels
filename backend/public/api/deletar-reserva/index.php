<?php
    require "../../../vendor/autoload.php";
    use App\Utils\Response;
    use App\Utils\Reserves;
    use App\Utils\Auth;

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

    if (!isset($_GET["id"])) {
        echo Response::json(403, "ID não informado", ["success" => false]);
        exit;
    } else {
        $id = htmlspecialchars($_GET["id"]);
    }

    $reserves = new Reserves();
    $reserve_delete = $reserves::delete_reserve($id);
    if ($reserve_delete) {
        echo Response::json(200, "Reserva eliminada com sucesso!", ["success" => true]);
        exit;
    } else {
        echo Response::json(200, "Não foi possível eliminar a reserva!", ["success" => false]);
        exit;
    }
?>