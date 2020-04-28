SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

-- CREATE TABLE FOR USERS
DROP TABLE IF EXISTS `loginInfo`;
CREATE TABLE `loginInfo` (
  `loginId` mediumint(20) NOT NULL,
  `username` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(25) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `loginInfo` (`loginId`, `username`, `password`) VALUES
(1, 'Leroy', 'Jenkins'),
(2, 'geo', 'woods'),
(3, 'Jose', 'C'),
(4, 'Mahandus', 'Lincoln'),
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
    `platform` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
    `rating`   mediumint(10) NOT NULL,
    `pricing`  float(100) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `videoGames` (`videogame_id`, `title`, `genre`, `platform`, `rating`, `pricing`) VALUES
(1, 'DOOM', `FPS`, `Console, PC`, `9/10`, `59.99`),
(2, 'Sekiro: Shadows Die Twice', `FPS`, `Console, PC`, `9/10`, `59.99`),
(3, 'Resident Evil 2 Remake', `FPS`, `Console, PC`, `9/10`, `59.99`),
(4, 'Death Stranding', `FPS`, `Console, PC`, `9/10`, `59.99`),
(5, 'Control', `FPS`, `Console, PC`, `9/10`, `59.99`),
(6, 'The Outer Worlds', `FPS`, `Console, PC`, `9/10`, `59.99`),
(7, 'Outer Wilds', `FPS`, `Console, PC`, `9/10`, `59.99`),
(8, 'Star Wars Jedi: Fallen Order', `FPS`, `Console, PC`, `9/10`, `59.99`),
(9, 'Apex Legends', `FPS`, `Console, PC`, `9/10`, `59.99`),
(10, 'The Legend of Zelda: Links Awakening', `FPS`, `Console, PC`, `9/10`, `59.99`),
(11, 'Gears 5', `FPS`, `Console, PC`, `9/10`, `59.99`),
(12, 'Astral Chain', `FPS`, `Console, PC`, `9/10`, `59.99`),
(13, 'Devil May Cry 5', `FPS`, `Console, PC`, `9/10`, `59.99`),
(14, 'Borderlands 3', `FPS`, `Console, PC`, `9/10`, `59.99`),
(15, 'Days Gone', `FPS`, `Console, PC`, `9/10`, `59.99`),
(16, 'Call of Duty: Modern Warfare', `FPS`, `Console, PC`, `9/10`, `59.99`),
(17, 'Metro Exodus', `FPS`, `Console, PC`, `9/10`, `59.99`),
(18, 'Pokémon Sword and Shield', `FPS`, `Console, PC`, `9/10`, `59.99`),
(19, 'Final Fantasy 14: Shadowbringers', `FPS`, `Console, PC`, `9/10`, `59.99`),
(20, 'The Division 2', `FPS`, `Console, PC`, `9/10`, `59.99`);

-- CREATE TABLE FOR GAME DEVELOPERS
DROP TABLE IF EXISTS `gameDevelopers`;
CREATE TABLE `gameDevelopers`(
    -- gameDevelopers_id, company_name;
    `gameDevelopers_id` mediumint(20) NOT NULL,
    `company_name`      varchar(25) COLLATE utf8_unicode_ci NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `gameDevelopers` (`gameDevelopers_id`, `company_name`) VALUES
(1, 'Nintendo'),
(2, 'Valve Corporation'),
(3, 'Rockstar Games'),
(4, 'Electronic Arts'),
(5, 'Activision Blizzard'),
(6, 'Sony Computer Entertainment'),
(7, 'Ubisoft'),
(8, 'Sega Games Co. Ltd'),
(9, 'BioWare'),
(10, 'Square Enix Holdings Co. Ltd'),
(11, 'Capcom Company Ltd'),
(12, 'Bungie Inc'),
(13, 'Microsoft Corporation'),
(14, 'Bandai Namco Entertainment'),
(15, 'Mojang'),
(16, 'Epic Games'),
(17, 'Game Freak'),
(18, 'Insomniac Games Inc'),
(19, 'Infinity Ward'),
(20, 'ZeniMax Media Inc');

ALTER TABLE `loginInfo`
  ADD PRIMARY KEY (`loginId`);

ALTER TABLE `videoGames`
  ADD PRIMARY KEY (`loginId`);

ALTER TABLE `gameDevelopers`
  ADD PRIMARY KEY (`loginId`);
  
ALTER TABLE `loginInfo`
  MODIFY `loginId` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

ALTER TABLE `videoGames`
  MODIFY `loginId` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

ALTER TABLE `gameDevelopers`
  MODIFY `loginId` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
  
COMMIT;