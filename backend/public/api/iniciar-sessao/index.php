<?php
    require __DIR__ . "/../../../vendor/autoload.php";
    require_once __DIR__ . "/../../../config/cors.php";
    require_once __DIR__ . "/../../../config/index.php";
    use Firebase\JWT\JWT;
    use App\Backend\Users;
    use App\Backend\Response;

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (isset($_POST["email"]) and isset($_POST["password"])) {
            $email = htmlspecialchars($_POST["email"]);
            $password = htmlspecialchars($_POST["password"]);
            $user = new Users();
            $resultsQuery = $user->get_user($email);
            if ($resultsQuery and password_verify($password, $resultsQuery["password"])) {
                $payload = [
                    "iss" => BASE_URL,
                    "aud" => BASE_URL,
                    "iat" => time(),
                    "exp" => time() + (7 * 24 * 60 * 60),
                    "data" => [
                        "email" => $resultsQuery["email"],
                        "username" => $resultsQuery["username"], 
                        "type" => $resultsQuery["type"],
                        "created_at" => $resultsQuery["created_at"]
                    ]
                ];

                $jwt = JWT::encode($payload, SECRET_KEY, "HS256");
                echo Response::json(200, "Login efetuado com sucesso!", [
                    "success" => true,
                    "token" => $jwt
                ]);

                exit;
            } else {
                echo Response::json(400, "Email ou senha inválidos!", [
                    "success" => false,
                    "resultados_encontrados" => $resultsQuery,
                    "senha_e_igual" => password_verify($password, $resultsQuery["password"])
                ]);
                exit;
            }
        } else {
            echo Response::json(400, "Dados da conta estão inválidos.", ["success" => false]);
            exit;
        }
    } else {
        echo Response::json(405, "Método da requesição inválido.", ["success" => false]);
        exit;
    }
?>