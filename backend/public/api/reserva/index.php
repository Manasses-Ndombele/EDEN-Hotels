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
        } else {
            echo Response::json(200, "Não foi possível consultar a reserva requerida!", [
                "success" => false
            ]);
        }

        exit;
    } else {
        echo Response::json(405, "Método da requesição inválido.", ["success" => false]);
        exit;
    }
?>