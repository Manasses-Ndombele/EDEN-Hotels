<?php
    require __DIR__ . "/../../../config/cors.php";
    require __DIR__ . "/../../../vendor/autoload.php";
    use App\Backend\Response;
    use App\Backend\Reserves;
    use App\Backend\Auth;

    if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
        if (!isset($_SERVER["HTTP_AUTHORIZATION"]) || empty($_SERVER["HTTP_AUTHORIZATION"])) {
            echo Response::json(403, "Token não enviado corretamente", ["success" => false]);
            exit;
        }

        $token = trim(str_replace("Bearer ", "", $_SERVER["HTTP_AUTHORIZATION"]));
        $user = Auth::verify_token($token);
        if (!$user["success"]) {
            echo Response::json(403, "Token inválido!", ["success" => false]);
            exit;
        }

        if (!isset($_GET["id"])) {
            echo Response::json(403, "ID não informado", ["success" => false]);
            exit;
        }

        $id = htmlspecialchars($_GET["id"]);
        $reserve = new Reserves();
        $reserve_delete = $reserve->delete_reserve($id);
        if ($reserve_delete) {
            echo Response::json(200, "Sucesso!", ["success" => true]);
            exit;
        } else {
            echo Response::json(200, "Permissão negada!", ["success" => false]);
            exit;
        }
    } else {
        echo Response::json(405, "Método da requesição inválido.", ["success" => false]);
        exit;
    }
?>