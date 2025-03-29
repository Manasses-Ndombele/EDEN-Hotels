<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EDEN Hotels - Backend</title>
</head>

<body style="display: flex; flex-direction: column; min-height: 100vh; justify-content: center; align-items: center;">
    <h1 style="text-align: center; text-transform: uppercase;">O Backend de EDEN Hotels está rodando com sucesso! 🫡
    </h1>
    <br>
    <?php
        require __DIR__ . "/../vendor/autoload.php";
        use App\Backend\Users;
        $user = new Users();
        $user_datas = $user->get_user("manassesndombele@freelancer.com", false, 1);
        echo '<h2 style="text-align: center; text-transform: uppercase;">SUPER USUÁRIO: ' . $user_datas["username"] . ' </h2>';
    ?>
</body>

</html>