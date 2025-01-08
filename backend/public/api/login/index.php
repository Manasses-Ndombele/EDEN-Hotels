<?php
    require "../../../vendor/autoload.php";
    require "../../../config/index.php";
    use Firebase\JWT\JWT;
    use App\Utils\Users;
    use App\Utils\Response;

    if (isset($_POST["email"]) and isset($_POST["password"])) {
        $user = new Users();
        $resultsQuery = $user->get_user($_POST["email"]);
        if ($resultsQuery and password_verify($_POST["password"], $resultsQuery["password"])) {
            $payload = [
                "iss" => BASE_URL,
                "aud" => BASE_URL,
                "iat" => time(),
                "exp" => time() + (7 * 24 * 60 * 60),
                "data" => [
                    "id" => $resultsQuery["id"],
                    "email" => $resultsQuery["email"],
                    "username" => $resultsQuery["username"], 
                    "type" => $resultsQuery["type"]
                ]
            ];

            $jwt = JWT::encode($payload, SECRET_KEY, "HS256");
            echo Response::json(200, "Login efetuado com sucesso!", [
                "success" => true,
                "token" => $jwt
            ]);
        } else {
            echo Response::json(404, "Email ou senha inválidos!", ["success" => false]);
        }
    }
?>