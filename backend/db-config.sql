-- Tabela de usuários administradores
CREATE TABLE IF NOT EXISTS `Users` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `username` VARCHAR(30) NOT NULL,
    `email` VARCHAR(50) UNIQUE NOT NULL,
    `password` VARCHAR(150) NOT NULL,
    `type` VARCHAR(12) NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de reservas do hotel
CREATE TABLE IF NOT EXISTS `Reserves` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `client_name` VARCHAR(30) NOT NULL,
    `phonenumber` BIGINT NOT NULL,
    `hotel_country` VARCHAR(100) NOT NULL,
    `stay_time` INT NOT NULL,
    `datetime` DATETIME NOT NULL,
    `message` TEXT NULL,
    `status` VARCHAR(12) DEFAULT 'RESERVADO'
);

-- Tabela das configurações do sistema
CREATE TABLE IF NOT EXISTS `Config` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `key` VARCHAR(100) UNIQUE NOT NULL,
    `value` VARCHAR(255) NOT NULL
);

INSERT INTO `Users`
(`username`, `email`, `password`,`type`)
VALUES ({{SUPER_USER_NAME}}, {{SUPER_USER_EMAIL}}, {{SUPER_USER_PASSWORD}}, "SUPER_USER");


