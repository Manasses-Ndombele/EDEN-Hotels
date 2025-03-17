<?php
    require __DIR__ . "/../../../config/cors.php";
    require __DIR__ . "/../../../vendor/autoload.php";
    use App\Backend\Response;
    use App\Backend\Reserves;
    use App\Backend\Auth;

    if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
        $user = Auth::verify_token();
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
        } else {
            echo Response::json(200, "Não foi possível eliminar a reserva!", ["success" => false]);
        }

        exit;
    } else {
        echo Response::json(405, "Método da requesição inválido.", ["success" => false]);
        exit;
    }
?>