<?php
    require __DIR__ . "/../../../config/cors.php";
    require __DIR__ . "/../../../vendor/autoload.php";
    use App\Backend\Response;
    use App\Backend\Users;
    use App\Backend\Auth;
    use App\Backend\SuperUser;

    if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
        $user = Auth::verify_token();
        if (!$user) {
            echo Response::json(403, "Token inválido", ["success" => false]);
            exit;
        }

        if (!isset($_GET["email"])) {
            echo Response::json(403, "Email não informado", ["success" => false]);
            exit;
        } else {
            $email = htmlspecialchars($_GET["email"]);
            if ($email !== $user["email"] or !SuperUser::verify($user["email"])) {
                Response::json(403, "Autorização não concedida!", ["success" => false]);
                exit;
            }
        }

        $user = new Users();
        $user_delete = $user::delete_user($email);
        if ($user_delete) {
            echo Response::json(200, "Conta eliminada com sucesso!", ["success" => true]);
        } else {
            echo Response::json(200, "Não foi possível eliminar a conta!", ["success" => false]);
        }

        exit;
    } else {
        echo Response::json(405, "Método da requesição inválido.", ["success" => false]);
        exit;
    }
?>