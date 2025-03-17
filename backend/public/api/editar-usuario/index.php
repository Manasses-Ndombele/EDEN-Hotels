<?php
    require __DIR__ . "/../../../config/cors.php";
    require __DIR__ . "/../../../vendor/autoload.php";
    use App\Backend\Response;
    use App\Backend\user;
    use App\Backend\Auth;

    if ($_SERVER["REQUEST_METHOD"] == "PATCH") {
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
            if ($email !== $user["user"]["email"]) {
                Response::json(403, "Autorização não concedida!", ["success" => false]);
                exit;
            }
        }
    
        try {
            $new_datas = [
                "username" => $_POST["username"],
                "email" => $_POST["email"],
                "password" => $_POST["password"]
            ];
        } catch (Exception $e) {
            echo Response::json(400, "Dados da conta não informados!", ["success" => false]);
            exit;
        }
    
        $user = new Users();
        $user_update = $user::update_user($email, $new_datas);
        if ($user_update) {
            echo Response::json(200, "Conta atualizada com sucesso!", ["success" => true]);
        } else {
            echo Response::json(200, "Não foi possível atualizar a conta!", ["success" => false]);
        }

        exit;
    } else {
        echo Response::json(405, "Método da requesição inválido.", ["success" => false]);
        exit;
    }
?>