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

    $reserves = new Reserves();
    $reserves_datas = $reserves::get_reserve(0, true);
    echo Response::json(200, "Consulta de reservas bem sucedida!", [
        "success" => true,
        "datas" => $reserves_datas
    ]);
?>