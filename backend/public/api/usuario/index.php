<?php
    require __DIR__ . "/../../../config/cors.php";
    require __DIR__ . "/../../../vendor/autoload.php";
    use App\Backend\Response;
    use App\Backend\Auth;
    use App\Backend\Users;
    use App\Backend\SuperUser;

    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        $user = Auth::verify_token();
        if (!$user) {
            echo Response::json(403, "Token inválido!", ["success" => false]);
            exit;
        }

        if (!SuperUser::verify($user["email"])) {
            echo Response::json(403, "Autorização não concedida!", ["success" => false]);
            exit;
        }

        if (!isset($_GET["email"])) {
            echo Response::json(403, "Email não informado", ["success" => false]);
            exit;
        } else {
            $email = htmlspecialchars($_GET["email"]);
        }

        $users = new Users();
        $users_datas = $users::get_user($email);
        if ($users_datas) {
            echo Response::json(200, "Consulta de usuário bem sucedida!", [
                "success" => true,
                "datas" => $users_datas
            ]);
        } else {
            echo Response::json(200, "Não foi possível consultar o usuário requerida!", [
                "success" => false
            ]);
        }

        exit;
    } else {
        echo Response::json(405, "Método da requesição inválido.", ["success" => false]);
        exit;
    }
?>