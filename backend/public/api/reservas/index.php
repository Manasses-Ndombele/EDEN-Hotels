<?php
    require __DIR__ . "/../../../config/cors.php";
    require __DIR__ . "/../../../vendor/autoload.php";
    use App\Backend\Response;
    use App\Backend\Auth;
    use App\Backend\Reserves;

    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        $user = Auth::verify_token();
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

        exit;
    } else {
        echo Response::json(405, "Método da requesição inválido.", ["success" => false]);
        exit;
    }
?>