<?php
    require "../../../vendor/autoload.php";
    use App\Utils\Response;
    use App\Utils\Auth;
    use App\Utils\Reserves;

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

    if (!isset($_GET["id"])) {
        echo Response::json(403, "ID não informado", ["success" => false]);
        exit;
    } else {
        $id = htmlspecialchars($_GET["id"]);
    }

    $reserves = new Reserves();
    $reserves_datas = $reserves::get_reserve($id);
    if ($reserves_datas) {
        echo Response::json(200, "Consulta de reserva bem sucedida!", [
            "success" => true,
            "datas" => $reserves_datas
        ]);

        exit;
    } else {
        echo Response::json(200, "Não foi possível consultar a reserva requerida!", [
            "success" => false
        ]);

        exit;
    }
?>