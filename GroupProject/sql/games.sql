SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

-- CREATE TABLE FOR USERS
DROP TABLE IF EXISTS `loginInfo`;
CREATE TABLE `loginInfo` (
  `id` tinyint(2) NOT NULL,
  `username` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(25) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `loginInfo` (`id`, `username`, `password`) VALUES
(1, 'Leroy', 'Jenkins'),
(2, 'geo', 'woods'),
(3, 'Jose', 'C'),
(4,'Mahandus', 'Lincoln'),
(5, 'Abraham', 'Gandhi'),
(6, 'Benjamin', 'Keller'),
(7, 'Hellen', 'Franklin'),
(8, 'C', 'S'),
(9, 'F', 'G'),
(10, 'J', 'C'),
(11, 'S', 'L'),
(12, 'A', 'J'),
(13, 'B', 'K'),
(14, 'H', 'F'),
(15, 'L', 'E'),
(16, 'G', 'W'),
(17, 'Z', 'X'),
(18, 'U', 'P'),
(19, 'Y', 'Q'),
(20, 'R', 'T');

-- CREATE TABLE FOR VIDEO GAMES
DROP TABLE IF EXISTS `videoGames`;
CREATE TABLE `videoGames`(
    -- videogame_id, title, genre, platform, rating, pricing;
    `videogame_id` mediumint(20) NOT NULL,
    `title`    varchar(25) COLLATE utf8_unicode_ci NOT NULL,
    `genre`    varchar(25) COLLATE utf8_unicode_ci NOT NULL,
    `rating`   mediumint(20) NOT NULL,
    `pricing`  float NOT NULL,
    `companyName`  varchar(500) COLLATE utf8_unicode_ci NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `videoGames` (`videogame_id`, `title`, `genre`, `rating`, `pricing`, `companyName`) VALUES
('1', 'DOOM', 'FPS',  '9/10', '59.99', 'id Software'),
('2', 'Sekiro: Shadows Die Twice', 'Action',  '9/10', '59.99', 'FromSoftware'),
('3', 'Resident Evil 2 Remake', 'Horror',  '9/10', '39.99', 'CAPCOM'),
('4', 'Death Stranding', 'Action',  '8/10', '59.99', 'Kojima Productions'),
('5', 'Control', 'Third-Person Shooter',  '8/10', '59.99', 'Remedy Entertainment'),
('6', 'The Outer Worlds', 'RPG',  '8/10', '59.99', 'Obisidan Entertainment'),
('7', 'Outer Wilds', 'Action',  '8/10', '24.99', 'Mobius Digital'),
('8', 'Star Wars Jedi: Fallen Order', 'Action', '7/10', '35.99', 'Respawn Entertainment'),
('9', 'Apex Legends', 'FPS',  '8/10', 'FREE', 'Electronics Arts'),
('10', 'The Legend of Zelda: Links Awakening', 'Action',  '8/10', '29.99', 'Grezzo'),
('11', 'Gears 5', 'Third-Person Shooter',  '6/10', '59.99', 'The Coalition'),
('12', 'Astral Chain','Action',  '9/10', '59.99', 'PlatinumGames'),
('13', 'Devil May Cry 5', 'Action',  '9/10', '39.99', 'Ninja Theory'),
('14', 'Borderlands 3', 'FPS',  '9/10', '59.99', 'Gearbox Software'),
('15', 'Days Gone', 'Horror',  '6/10', '39.99', 'SIE Bend Studio'),
('16', 'Modern Warfare', 'FPS',  '8/10', '59.99', 'Infinity Ward'),
('17', 'Metro Exodus', 'FPS',  '8/10', '39.99', '4A Games'),
('18', 'Pokémon Sword and Shield', 'RPG',  '8/10', '59.99', 'Game Freak'),
('19', 'Final Fantasy 14: Shadowbringers', 'RPG',  '9/10', '39.99', 'Square Enix'),
('20', 'The Division 2', 'Third-Person Shooter',  '8/10', '59.99', 'Ubisoft');

-- CREATE TABLE FOR GAME DEVELOPERS
DROP TABLE IF EXISTS `gameDevelopers`;
CREATE TABLE `gameDevelopers`(
    -- gameDevelopers_id, company_name;
    `gameDevelopers_id` mediumint(20) NOT NULL,
    `company_name`      varchar(50) COLLATE utf8_unicode_ci NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `gameDevelopers` (`gameDevelopers_id`, `company_name`) VALUES
(1, 'id Software'),
(2, 'FromSoftware'),
(3, 'CAPCOM'),
(4, 'Kojima Productions'),
(5, 'Remedy Entertainment'),
(6, 'Obisidan Entertainment'),
(7, 'Mobius Digital'),
(8, 'Respawn Entertainment'),
(9, 'Electronics Arts'),
(10, 'Grezzo'),
(11, 'The Coalition'),
(12, 'PlatinumGames'),
(13, 'Ninja Theory'),
(14, 'Gearbox Software'),
(15, 'SIE Bend Studio'),
(16, 'Infinity Ward'),
(17, '4A Games'),
(18, 'Game Freak'),
(19, 'Square Enix'),
(20, 'Ubisoft');

ALTER TABLE `loginInfo`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `videoGames`
  ADD PRIMARY KEY (`videogame_id`);

ALTER TABLE `gameDevelopers`
  ADD PRIMARY KEY (`gameDevelopers_id`);
  
ALTER TABLE `loginInfo`
  MODIFY `id` tinyint(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

ALTER TABLE `videoGames`
  MODIFY `videogame_id` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

ALTER TABLE `gameDevelopers`
  MODIFY `gameDevelopers_id` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
  
COMMIT;