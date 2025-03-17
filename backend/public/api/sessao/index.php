<?php
    require __DIR__ . "/../../../config/cors.php";
    require __DIR__ . "/../../../vendor/autoload.php";
    use App\Backend\Response;
    use App\Backend\Auth;

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (!isset($_SERVER["HTTP_AUTHORIZATION"]) || empty($_SERVER["HTTP_AUTHORIZATION"])) {
            echo Response::json(403, "Token não enviado corretamente", ["success" => false]);
            exit;
        }
    
        $token = trim(str_replace("Bearer ", "", $_SERVER["HTTP_AUTHORIZATION"]));
        $user = Auth::verify_token($token);
        if ($user["success"]) {
            echo Response::json(200, "Usuário logado com sucesso", [
                "success" => true,
                "user" => $user["datas"]
            ]);
    
            exit;
        } else {
            echo Response::json(403, $user["error_message"], [
                "success" => false,
                "token" => $user["token"]
            ]);
    
            exit;
        }
    } else {
        echo Response::json(405, "Método da requesição inválido!", ["success" => false]);
        exit;
    }
?>