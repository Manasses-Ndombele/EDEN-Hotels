<?php
    require __DIR__ . "/../../../config/cors.php";
    require __DIR__ . "/../../../vendor/autoload.php";
    use App\Backend\Users;
    use App\Backend\Response;
    use App\Backend\Auth;
    use App\Backend\SuperUser;

    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        $user = Auth::verify_token();
        if (!$user) {
            echo Response::json(403, "Token inválido", ["success" => false]);
            exit;
        }

        if (!SuperUser::verify($user["email"])) {
            echo Response::json(403, "Autorização não concedida!", ["success" => false]);
            exit;
        }

        $users = new Users();
        $users_datas = $users::get_user(0, true);
        echo Response::json(200, "Usuários encontrados sucesso!", [
            "success" => true,
            "datas" => $users_datas
        ]);

        exit;
    } else {
        echo Response::json(405, "Método da requesição inválido.", ["success" => false]);
        exit;
    }
?>