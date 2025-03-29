<?php
    require __DIR__ . "/../vendor/autoload.php";
    use Symfony\Component\Dotenv\Dotenv;

    define("DEBUG_MODE", true);
    if (DEBUG_MODE) {
        $dotenv = new Dotenv();
        $dotenv->load(__DIR__ . '/../.env');
        define("SECRET_KEY", $_ENV['SECRET_KEY']);
        define("BASE_URL", $_ENV["BASE_URL"]);
        define("DB_HOST", $_ENV["DB_HOST"]);
        define("DB_USER", $_ENV["DB_USER"]);
        define("DB_PASSWORD", $_ENV["DB_PASSWORD"]);
        define("DB_NAME", $_ENV["DB_NAME"]);
        define("DB_PORT", $_ENV["DB_PORT"]);
    } else {
        define("SECRET_KEY", getenv("SECRET_KEY"));
        define("BASE_URL", getenv("BASE_URL"));
        define("DB_HOST", getenv("DB_HOST"));
        define("DB_USER", getenv("DB_USER"));
        define("DB_PASSWORD", getenv("DB_PASSWORD"));
        define("DB_NAME", getenv("DB_NAME"));
        define("DB_PORT", getenv("DB_PORT"));
    }
?>