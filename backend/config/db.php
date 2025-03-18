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
    }
?>