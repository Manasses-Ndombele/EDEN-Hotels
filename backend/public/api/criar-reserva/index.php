<?php
    require __DIR__ . "/../../../config/cors.php";
    require __DIR__ . "/../../../vendor/autoload.php";
    use App\Backend\Reserves;
    use App\Backend\Response;

    function validateRequiredFields(array $data, array $requiredFields): array {
        $errors = [];
        foreach ($requiredFields as $field) {
            if (!isset($data[$field]) || $data[$field] === "") {
                $errors[] = "O campo '$field' é obrigatório";
            }
        }

        return $errors;
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $requestFields = ["client_name", "phonenumber", "hotel_country", "start_date", "end_date"];
        $validationErrors = validateRequiredFields($_POST, $requestFields);
        if (!empty($validationErrors)) {
            echo Response::json(400, "Dados da reserva inválidos!", [
                "success" => false,
                "errors" => $validationErrors
            ]);

            exit;
        } else {
            $reserve = new Reserves();
            $clientName = htmlspecialchars($_POST["client_name"]);
            $phonenumber = htmlspecialchars($_POST["phonenumber"]);
            $hotelCountry = htmlspecialchars($_POST["hotel_country"]);
            $start_date = htmlspecialchars($_POST["start_date"]);
            $end_date = htmlspecialchars($_POST["end_date"]);
            $message = isset($_POST["message"]) ? htmlspecialchars($_POST["message"]) : null;
            $queryResult = $reserve->create(
                $client_name=$clientName,
                $phonenumber=$phonenumber,
                $hotel_country=$hotelCountry,
                $start_date=$start_date,
                $end_date=$end_date,
                $message=$message
            );

            if ($queryResult["success"]) {
                echo Response::json(200, "Reserva criada com sucesso!", [
                    "success" => true,
                    "reserve_id" => $queryResult["id"]
                ]);

                exit;
            } else {
                echo Response::json(200, "Não foi possível cadastrar a reserva! Tente mais tarde.", [
                    "success" => false,
                    "error" => $queryResult["error"]
                ]);

                exit;
            }
        }
    } else {
        echo Response::json(405, "Método da requesição inválido.", ["success" => false]);
        exit;
    }
?>