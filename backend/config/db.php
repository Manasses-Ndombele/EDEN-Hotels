<?php
    require_once __DIR__ . "/index.php";

    class Database {
        private string $dbHost;
        private string $dbUser;
        private string $dbPassword;
        private string $dbName;
        private string $dbPort;
        public $conn;
        public function __construct() {
            $this->dbHost = DB_HOST;
            $this->dbUser = DB_USER;
            $this->dbPassword = DB_PASSWORD;
            $this->dbName = DB_NAME;
            $this->dbPort = DB_PORT;
            $this->conn = new mysqli($this->dbHost, $this->dbUser, $this->dbPassword, $this->dbName, $this->dbPort);
            if ($this->conn->connect_error) {
                die("Erro na conexão: " . $this->conn->connect_error);
            }
        }

        public function createRow(string $table, array $datas) {
            switch ($table) {
                case "Users":
                    $stmt = $this->conn->prepare("INSERT INTO `Users`
                        (`username`, `email`, `password`, `type`)
                        VALUES (?, ?, ?, ?)
                    ");

                    $username = $datas["username"];
                    $email = $datas["email"];
                    $password_hash = password_hash($datas['password'], PASSWORD_DEFAULT);
                    $account_type = 'ADMIN';
                    $stmt->bind_param('ssss', $username, $email, $password_hash, $account_type);
                    if ($stmt->execute()) {
                        $stmt->close();
                        return [
                            "success" => true,
                            "id" => $this->conn->insert_id 
                        ];
                    } else {
                        $stmt->close();
                        return ["success" => false];
                    }

                    break;
    
                case "Reserves":
                    if (isset($datas['message'])) {
                        $stmt = $this->conn->prepare("INSERT INTO `Reserves`
                            (`client_name`, `phonenumber`, `hotel_country`, `stay_time`, `datetime`, `message`)
                            VALUES (?, ?, ?, ?, ?, ?)
                        ");
    
                        $client_name = $data["client_name"];
                        $phonenumber = $data["phonenumber"];
                        $hotel_country = $data["hotel_country"];
                        $stay_time = $data["stay_time"];
                        $datetime = $data["datetime"];
                        $message = $data["message"];
                        $stmt->bind_param("sisiss", $client_name, $phonenumber, $hotel_country, $stay_time, $datetime, $message);
                        if ($stmt->execute()) {
                            $stmt->close();
                            return [
                                "success" => true,
                                "id" => $this->conn->insert_id 
                            ];
                        } else {
                            $stmt->close();
                            return ["success" => false];
                        }
                    } else {
                        $stmt = $this->conn->prepare("INSERT INTO `Reserves`
                            (`client_name`, `phonenumber`, `hotel_country`, `stay_time`, `datetime`)
                            VALUES (?, ?, ?, ?, ?)
                        ");
    
                        $client_name = $data["client_name"];
                        $phonenumber = $data["phonenumber"];
                        $hotel_country = $data["hotel_country"];
                        $stay_time = $data["stay_time"];
                        $datetime = $data["datetime"];
                        $stmt->bind_param('sisis', $client_name, $phonenumber, $hotel_country, $stay_time, $datetime);
                        if ($stmt->execute()) {
                            $stmt->close();
                            return [
                                "success" => true,
                                "id" => $this->conn->insert_id 
                            ];
                        } else {
                            $stmt->close();
                            return ["success" => false];
                        }
                    }

                    break;

                default:
                    break;
            }
        }
    }
?>