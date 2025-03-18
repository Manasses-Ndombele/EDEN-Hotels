<?php
    require __DIR__ . "/../../../config/cors.php";
    require __DIR__ . "/../../../vendor/autoload.php";
    use App\Backend\Response;
    use App\Backend\Auth;
    use App\Backend\Reserves;

    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        if (!isset($_SERVER["HTTP_AUTHORIZATION"]) || empty($_SERVER["HTTP_AUTHORIZATION"])) {
            echo Response::json(403, "Token não enviado corretamente", ["success" => false]);
            exit;
        }

        $token = trim(str_replace("Bearer ", "", $_SERVER["HTTP_AUTHORIZATION"]));
        $user = Auth::verify_token($token);
        if ($user["success"]) {
            if (!isset($_GET["id"])) {
                echo Response::json(403, "ID não informado", ["success" => false]);
                exit;
            }

            $id = htmlspecialchars($_GET["id"]);
            $reserve = new Reserves();
            $reserve_datas = $reserve->get_reserve($id);
            if (!$reserve_datas) {
                echo Response::json(200, "Não foi possível consultar a reserva requerida!", ["success" => false]);
                exit;
            } else {
                echo Response::json(200, "Consulta de reserva bem sucedida!", [
                    "success" => true,
                    "datas" => $reserve_datas
                ]);

                exit;
            }
        } else {
            echo Response::json(403, "Usuário não autenticado", ["success" => false]);
            exit;
        }
    } else {
        echo Response::json(405, "Método da requesição inválido.", ["success" => false]);
        exit;
    }
?>