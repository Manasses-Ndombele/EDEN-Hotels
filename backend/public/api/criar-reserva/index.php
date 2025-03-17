<?php
    require __DIR__ . "/../../../config/cors.php";
    require __DIR__ . "/../../../vendor/autoload.php";
    use App\Backend\Reserves;
    use App\Backend\Response;

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $reserve = new Reserves();
        $requestNullData = false;
        isset($_POST["client_name"])
        ? $clientName = $_POST["client_name"]
        : $requestNullData = true;
        isset($_POST["phonenumber"])
        ? $phonenumber = $_POST["phonenumber"]
        : $requestNullData = true;
        isset($_POST["hotel_country"])
        ? $hotel_country = $_POST["hotel_country"]
        : $requestNullData = true;
        isset($_POST["stay_time"])
        ? $stayTime = $_POST["stay_time"]
        : $requestNullData = true;
        isset($_POST["datetime"])
        ? $datetime = $_POST["datetime"]
        : $requestNullData = true;
        isset($_POST["message"])
        ? $message = $_POST["message"]
        : $message = NULL;
        if (!$requestNullData) {
            $queryResult = $reserve->create(
                $client_name=$clientName,
                $phonenumber=$phonenumber,
                $hotel_country=$hotel_country,
                $stay_time=$stayTime,
                $datetime=$datetime,
                $message=$message
            );
        } else {
            echo Response::json(400, "Dados da reserva inválidos!", ["success" => false]);
        }

        if ($queryResult["success"]) {
            echo Response::json(200, "Reserva criada com sucesso!", [
                "success" => true,
                "reserve_id" => $queryResult["id"]
            ]);
        } else {
            echo Response::json(200, "Não foi possível cadastrar a reserva! Tente mais tarde.", ["success" => false]);
        }

        exit;
    } else {
        echo Response::json(405, "Método da requesição inválido.", ["success" => false]);
        exit;
    }
?>