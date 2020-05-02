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
    `title`    varchar(500) COLLATE utf8_unicode_ci NOT NULL,
    `genre`    varchar(50) COLLATE utf8_unicode_ci NOT NULL,
    `rating`   mediumint(20) NOT NULL,
    `pricing`  float NOT NULL,
    `cover`    varchar(200) COLLATE utf8_unicode_ci NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `videoGames` (`videogame_id`, `title`, `genre`, `rating`, `pricing`, `cover`) VALUES
(1, 'DOOM', 'FPS',  '9/10', '59.99', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/900px-Albert_Einstein_Head.jpg'),
(2, 'Sekiro: Shadows Die Twice', 'FPS',  '9/10', '59.99', 'https://file-cdn.scdkey.com/product/P201609081840431360.jpg'),
(3, 'Resident Evil 2 Remake', 'FPS',  '9/10', '59.99', 'https://file-cdn.scdkey.com/product/P201609081840431360.jpg'),
(4, 'Death Stranding', 'FPS',  '9/10', '59.99', 'https://file-cdn.scdkey.com/product/P201609081840431360.jpg'),
(5, 'Control', 'FPS',  '9/10', '59.99', 'https://file-cdn.scdkey.com/product/P201609081840431360.jpg'),
(6, 'The Outer Worlds', 'FPS',  '9/10', '59.99', 'https://file-cdn.scdkey.com/product/P201609081840431360.jpg'),
(7, 'Outer Wilds', 'FPS',  '9/10', '59.99', 'https://file-cdn.scdkey.com/product/P201609081840431360.jpg'),
(8, 'Star Wars Jedi: Fallen Order', 'FPS',  '9/10', '59.99', 'https://file-cdn.scdkey.com/product/P201609081840431360.jpg'),
(9, 'Apex Legends', 'FPS',  '9/10', '59.99', 'https://file-cdn.scdkey.com/product/P201609081840431360.jpg'),
(10, 'The Legend of Zelda: Links Awakening', 'FPS',  '9/10', '59.99', 'https://file-cdn.scdkey.com/product/P201609081840431360.jpg'),
(11, 'Gears 5', 'FPS',  '9/10', '59.99', 'https://file-cdn.scdkey.com/product/P201609081840431360.jpg'),
(12, 'Astral Chain', 'FPS',  '9/10', '59.99', 'https://file-cdn.scdkey.com/product/P201609081840431360.jpg'),
(13, 'Devil May Cry 5', 'FPS',  '9/10', '59.99', 'https://file-cdn.scdkey.com/product/P201609081840431360.jpg'),
(14, 'Borderlands 3', 'FPS',  '9/10', '59.99', 'https://file-cdn.scdkey.com/product/P201609081840431360.jpg'),
(15, 'Days Gone', 'FPS',  '9/10', '59.99', 'https://file-cdn.scdkey.com/product/P201609081840431360.jpg'),
(16, 'Call of Duty: Modern Warfare', 'FPS',  '9/10', '59.99', 'https://file-cdn.scdkey.com/product/P201609081840431360.jpg'),
(17, 'Metro Exodus', 'FPS',  '9/10', '59.99', 'https://file-cdn.scdkey.com/product/P201609081840431360.jpg'),
(18, 'Pokémon Sword and Shield', 'FPS',  '9/10', '59.99', 'https://file-cdn.scdkey.com/product/P201609081840431360.jpg'),
(19, 'Final Fantasy 14: Shadowbringers', 'FPS',  '9/10', '59.99', 'https://file-cdn.scdkey.com/product/P201609081840431360.jpg'),
(20, 'The Division 2', 'FPS',  '9/10', '59.99', 'https://file-cdn.scdkey.com/product/P201609081840431360.jpg');

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
  ADD PRIMARY KEY (`videogame_id`);

ALTER TABLE `gameDevelopers`
  ADD PRIMARY KEY (`gameDevelopers_id`);
  
ALTER TABLE `loginInfo`
  MODIFY `loginId` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

ALTER TABLE `videoGames`
  MODIFY `videogame_id` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

ALTER TABLE `gameDevelopers`
  MODIFY `gameDevelopers_id` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
  
COMMIT;
