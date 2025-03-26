<?php
    require __DIR__ . "/../../../config/cors.php";
    require __DIR__ . "/../../../vendor/autoload.php";
    use App\Backend\Users;
    use App\Backend\Response;
    use App\Backend\Auth;
    use App\Backend\SuperUser;

    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        if (!isset($_SERVER["HTTP_AUTHORIZATION"]) || empty($_SERVER["HTTP_AUTHORIZATION"])) {
            echo Response::json(403, "Token não enviado corretamente", ["success" => false]);
            exit;
        }

        $token = trim(str_replace("Bearer ", "", $_SERVER["HTTP_AUTHORIZATION"]));
        $user = Auth::verify_token($token);
        if (!$user["success"]) {
            echo Response::json(403, "Token inválido", ["success" => false]);
            exit;
        }

        if (!SuperUser::verify($user["datas"]->email)) {
            echo Response::json(403, "Autorização não concedida!", ["success" => false]);
            exit;
        }

        $users = new Users();
        $users_datas = $users->get_user(0, true);
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