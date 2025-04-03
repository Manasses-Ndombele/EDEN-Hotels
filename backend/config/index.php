<?php
require __DIR__ . "/../vendor/autoload.php";
use Symfony\Component\Dotenv\Dotenv;

$dotenv = new Dotenv();
$envPath = __DIR__ . '/../.env';

if (file_exists($envPath)) {
    $dotenv->load($envPath);
}

define("SECRET_KEY", $_ENV["SECRET_KEY"] ?? getenv("SECRET_KEY") ?? "");
define("BASE_URL", $_ENV["BASE_URL"] ?? getenv("BASE_URL") ?? "http://localhost:5000/");
define("DB_HOST", $_ENV["DB_HOST"] ?? getenv("DB_HOST") ?? "localhost");
define("DB_USER", $_ENV["DB_USER"] ?? getenv("DB_USER") ?? "root");
define("DB_PASSWORD", $_ENV["DB_PASSWORD"] ?? getenv("DB_PASSWORD") ?? "Python3/JS6");
define("DB_NAME", $_ENV["DB_NAME"] ?? getenv("DB_NAME") ?? "EDEN_HOTELS_DB");
define("DB_PORT", $_ENV["DB_PORT"] ?? getenv("DB_PORT") ?? "3306");
?>
