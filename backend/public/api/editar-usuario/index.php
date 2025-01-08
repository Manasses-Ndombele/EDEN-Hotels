<?php
    require __DIR__ . "/../../../config/cors.php";
    require __DIR__ . "/../../../vendor/autoload.php";
    use App\Backend\Response;
    use App\Backend\Users;
    use App\Backend\Auth;
    use App\Backend\SuperUser;
    use App\Backend\FormFields;

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

        if (!isset($_GET["email"])) {
            echo Response::json(403, "Email não informado", ["success" => false]);
            exit;
        } else {
            $email = htmlspecialchars($_GET["email"]);
            if ($email !== $user["datas"]->email) {
                if (!SuperUser::verify($user["datas"]->email)) {
                    Response::json(403, "Autorização não concedida!", ["success" => false]);
                    exit;
                }
            }
        }

        $requestFields = ["username", "email", "active"];
        $input = file_get_contents("php://input");
        parse_str($input, $patchData);
        $validationErrors = FormFields::validate($patchData, $requestFields);
        if (!empty($validationErrors)) {
            echo Response::json(400, "Dados do usuário inválidos!", [
                "success" => false,
                "errors" => $validationErrors,
                "form" => [$patchData["username"], $patchData["email"], $patchData["password"]]
            ]);

            exit;
        } else {
            $user = new Users();
            $new_datas = [
                "username" => htmlspecialchars($patchData["username"]),
                "email" => htmlspecialchars($patchData["email"]),
                "active" => $patchData["active"] === "ATIVADO" ? 1 : 0
            ];

            $user_update = $user->update_user($email, $new_datas);
            if ($user_update) {
                echo Response::json(200, "Conta atualizada com sucesso!", ["success" => true]);
                exit;
            } else {
                echo Response::json(200, "Não foi possível atualizar a conta!", ["success" => false]);
                exit;
            }
        }
    } else {
        echo Response::json(405, "Método da requesição inválido.", ["success" => false]);
        exit;
    }
?>