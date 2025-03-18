<?php
    require __DIR__ . "/../../../config/cors.php";
    require __DIR__ . "/../../../vendor/autoload.php";
    use App\Backend\Response;
    use App\Backend\Auth;
    use App\Backend\Users;
    use App\Backend\SuperUser;

    if ($_SERVER["REQUEST_METHOD"] == "GET") {
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

        if (!isset($_GET["email"])) {
            echo Response::json(403, "Email não informado", ["success" => false]);
            exit;
        } else {
            $email = htmlspecialchars($_GET["email"]);
            if ($email !== $user["datas"]->email) {
                if (!SuperUser::verify($user["datas"]->email)) {
                    echo Response::json(403, "Autorização não concedida!", ["success" => false]);
                    exit;
                } else {
                    $adminPrivileges = true;
                }
            }
        }

        $user = new Users();
        if ($adminPrivileges) {
            $user_datas = $user->get_user($email, false, 2);
        } else {
            $user_datas = $user->get_user($email);
        }

        if (!$user_datas) {
            echo Response::json(200, "Não foi possível consultar o usuário requerido!", ["success" => false]);
            exit;
        } else {
            echo Response::json(200, "Consulta de usuário bem sucedida!", [
                "success" => true,
                "datas" => $user_datas
            ]);

            exit;
        }
    } else {
        echo Response::json(405, "Método da requesição inválido.", ["success" => false]);
        exit;
    }
?>