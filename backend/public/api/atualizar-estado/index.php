<?php
    require __DIR__ . "/../../../config/cors.php";
    require __DIR__ . "/../../../vendor/autoload.php";
    use App\Backend\Response;
    use App\Backend\Users;
    use App\Backend\Auth;
    use App\Backend\SuperUser;

    if ($_SERVER["REQUEST_METHOD"] == "PATCH") {
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

        if (!isset($_GET["email"]) || !isset($_GET["active"])) {
            echo Response::json(403, "Email não informado", ["success" => false]);
            exit;
        } else {
            $email = htmlspecialchars($_GET["email"]);
            $active = htmlspecialchars($_GET["active"]);
            if ($email !== $user["datas"]->email) {
                if (!SuperUser::verify($user["datas"]->email)) {
                    echo Response::json(403, "Autorização não concedida!", ["success" => false]);
                    exit;
                }
            } else {
                if ((int) $active === 1) {
                    if (!SuperUser::verify($user["datas"]->email)) {
                        echo Response::json(403, "Autorização não concedida!", ["success" => false]);
                        exit;
                    }
                } else if ((int) $active === 0) {

                } else {
                    echo Response::json(400, "Valor do parâmetro active inválido!", ["success" => false]);
                    exit;
                }
            }
        }

        $user = new Users();
        $user_deactivate  = $user->set_active($email, $active);
        if ($user_deactivate) {
            echo Response::json(200, "Sucesso!", ["success" => true]);
            exit;
        } else {
            echo Response::json(200, "Erro inesperado!", ["success" => false]);
            exit;
        }
    } else {
        echo Response::json(405, "Método da requesição inválido.", ["success" => false]);
        exit;
    }
?>