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

    try {
        $new_datas = [
            "client_name" => $_POST["client_name"],
            "phonenumber" => $_POST["phonenumber"],
            "hotel_country" => $_POST["hotel_country"],
            "stay_time" => $_POST["stay_time"],
            "datetime" => $_POST["datetime"],
            "message" => $_POST["message"],
            "status" => $_POST["status"]
        ];
    } catch (Exception $e) {
        echo Response::json(400, "Dados da reserva não informados!", ["success" => false]);
        exit;
    }

    $reserves = new Reserves();
    $reserve_update = $reserves::update_reserve($id, $new_datas);
    if ($reserve_update) {
        echo Response::json(200, "Reserva atualizada com sucesso!", ["success" => true]);
        exit;
    } else {
        echo Response::json(200, "Não foi possível atualizar a reserva!", ["success" => false]);
        exit;
    }
?>