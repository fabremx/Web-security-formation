CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `user` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, PRIMARY KEY (`id`));
INSERT INTO `freshshop`.`users` VALUES(1, 'bill', 'admin123');
INSERT INTO `freshshop`.`users` VALUES(2, 'jack', 'pswd1');
INSERT INTO `freshshop`.`users` VALUES(3, 'jeanne', 'azerty');
CREATE TABLE `products` (`id` int NOT NULL, `title` varchar(45) DEFAULT NULL, `price` int DEFAULT NULL, `description` varchar(255) DEFAULT NULL, `image` varchar(45) DEFAULT NULL, PRIMARY KEY (`id`));
INSERT INTO `freshshop`.`products` VALUES(1, 'Fachion Lorem ipsum dolor sit amet', 40, 'img-pro-01.jpg');
INSERT INTO `freshshop`.`products` VALUES(2, 'Fachion Lorem ipsum dolor sit amet', 35, 'img-pro-02.jpg');
INSERT INTO `freshshop`.`products` VALUES(3, 'Fachion Lorem ipsum dolor sit amet', 12, 'img-pro-03.jpg');