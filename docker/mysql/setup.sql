CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `isAdmin` BOOLEAN NOT NULL, PRIMARY KEY (`id`));
INSERT INTO `footshop`.`users` VALUES(1, 'bill', 'admin123', 1);
INSERT INTO `footshop`.`users` VALUES(2, 'jack_75', 'pswd1', 0);
INSERT INTO `footshop`.`users` VALUES(3, 'jeannii', 'azerty', 0);
INSERT INTO `footshop`.`users` VALUES(4, 'hacker', 'hacker', 0);
CREATE TABLE `footshop`.`users_info` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NULL,
  `lastname` VARCHAR(45) NULL,
  `address` VARCHAR(255) NULL,
  `avatarURL` VARCHAR(255) NULL,
  `cartId` INT NULL,
  `creditCardNumber` VARCHAR(20) NULL,
  `creditCardExpiration` VARCHAR(20) NULL,
  `creditCardCVV` VARCHAR(3) NULL,
  `userId` INT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `userId`
    FOREIGN KEY (`id`)
    REFERENCES `footshop`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
INSERT INTO `footshop`.`users_info` VALUES(1, 'Bill', 'Dupond', '10 Rue de la paix', null, 1000, "357691504880233", "04/12/2024", "548", 1);
INSERT INTO `footshop`.`users_info` VALUES(2, 'Jack', 'Martin', '35 Rue de la république', null, 1001, "6011614443490927", "04/12/2024", "145", 2);
INSERT INTO `footshop`.`users_info` VALUES(3, 'Jeanne', 'Willson', '120 Place du marche', null, 1002, "4950192654772927", "04/12/2024", "005", 3);
INSERT INTO `footshop`.`users_info` VALUES(4, 'Bad', 'Hacker', '70 rue anonyme', null, 1003, "7980012641292944", "04/12/2024", "120", 4);
