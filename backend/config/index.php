<?php
    namespace App\Backend\Config;
    require "../vendor/autoload.php";
    use Symfony\Component\Dotenv\Dotenv;

    $dotenv = new Dotenv();
    $dotenv->load('../.env');
    define("SECRET_KEY", $_ENV['SECRET_KEY']);
    define("BASE_URL", $_ENV["BASE_URL"]);
    class Database {
        private string $dbHost;
        private string $dbUser;
        private string $dbPassword;
        private string $dbName;
        public $conn;
        public function __construct() {
            $this->dbHost = $_ENV['DB_HOST'];
            $this->dbUser = $_ENV['DB_USER'];
            $this->dbPassword = $_ENV['DB_PASSWORD'];
            $this->dbName = $_ENV['DB_NAME'];
            $this->dbPort = $_ENV['DB_PORT'];
            $this->conn = new mysqli($this->dbHost, $this->dbUser, $this->dbPassword, $this->dbName, $this->dbPort);
            if ($this->conn->connect_error) {
                die("Erro na conexão: " . $this->conn->connect_error);
            } else {
                $this->createTables();
            }
        }

        public function createTables() {
            $sqlQuery = "CREATE TABLE IF NOT EXISTS Users (
	id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(150) NOT NULL,
    type VARCHAR(12) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Reserves (
	id INT PRIMARY KEY AUTO_INCREMENT,
    client_name VARCHAR(30) NOT NULL,
    phonenumber BIGINT NOT NULL,
    hotel_country VARCHAR(100) NOT NULL,
    stay_time INT NOT NULL,
    datetime DATETIME NOT NULL,
    message TEXT NULL,
    status VARCHAR(12) DEFAULT = 'RESERVADO'
);";

            if ($this->conn->multi_query($sqlQuery) === true) {
                $this->createSuperUser($_ENV["SUPER_USER_NAME"], $_ENV["SUPER_USER_EMAIL"], $_ENV["SUPER_USER_PASSWORD"]);
                return true;
            } else {
                return false;
            }
        }

        public function createSuperUser(string $username, string $email, string $password) {
            $stmt = $this->conn->prepare("INSERT INTO Users
                (username, email, password, type)
                VALUES (?, ?, ?, ?)
            ");

            $stmt->bind_param('ssss', $username, $email, password_hash($password, PASSWORD_DEFAULT), 'SUPER_USER');
            if ($stmt->execute()) {
                $stmt->close();
                $this->conn->close();
                return true;
            } else {
                $stmt->close();
                $this->conn->close();
                return false;
            }
        }

        public function createRow(string $table, array $datas) {
            if ($table == "Users") {
                $stmt = $this->conn->prepare("INSERT INTO Users
                    (username, email, password, type)
                    VALUES (?, ?, ?, ?)
                ");

                $stmt->bind_param('ssss', $datas['username'], $datas['email'], password_hash($datas['password'], PASSWORD_DEFAULT), 'ADMIN');
                if ($stmt->execute()) {
                    $stmt->close();
                    $this->conn->close();
                    return [
                        "success" => true,
                        "id" => $this->conn->insert_id 
                    ];
                } else {
                    $stmt->close();
                    $this->conn->close();
                    return ["success" => false];
                }
            } else if ($table == "Reserves") {
                if (isset($datas['message'])) {
                    $stmt = $this->conn->prepare("INSERT INTO Reserves
                        (client_name, phonenumber, hotel_country, stay_time, datetime, message)
                        VALUES (?, ?, ?, ?, ?, ?)
                    ");

                    $stmt->bind_param("sisiss", $data['client_name'], $data['phonenumber'], $data['hotel_country'], $data['stay_time'], $data['datetime'], $data['message']);
                    if ($stmt->execute()) {
                        $stmt->close();
                        $this->conn->close();
                        return [
                            "success" => true,
                            "id" => $this->conn->insert_id 
                        ];
                    } else {
                        $stmt->close();
                        $this->conn->close();
                        return ["success" => false];
                    }
                } else {
                    $stmt = $this->conn->prepare("INSERT INTO Reserves
                        (client_name, phonenumber, hotel_country, stay_time, datetime)
                        VALUES (?, ?, ?, ?, ?)
                    ");

                    $stmt->bind_param('sisis', $data['client_name'], $data['phonenumber'], $data['hotel_country'], $data['stay_time'], $data['datetime']);
                    if ($stmt->execute()) {
                        $stmt->close();
                        $this->conn->close();
                        return [
                            "success" => true,
                            "id" => $this->conn->insert_id 
                        ];
                    } else {
                        $stmt->close();
                        $this->conn->close();
                        return ["success" => false];
                    }
                }
            }
        }
    }
?>