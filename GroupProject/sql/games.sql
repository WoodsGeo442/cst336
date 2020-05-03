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
    `details` varchar(500) COLLATE utf8_unicode_ci NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `videoGames` (`videogame_id`, `title`, `genre`, `rating`, `pricing`, `details`) VALUES
(1, 'DOOM', 'FPS',  '9/10', '59.99', 'On Mars, a massive research facility tapping energy from hell has been overwhelmed by demonic forces. As the last DOOM Slayer , you have been resurrected to do one thing; to cleanse this world and send them back to where they came from. - IMDb'),
(2, 'Sekiro: Shadows Die Twice', 'FPS',  '9/10', '59.99', 'Set in a reimagining of 1500s Sengoku era Japan. An unnamed shinobi, tasked with protecting a young lord of mystical lineage, who is left for dead when a powerful samurai attacks and chops off his arm. - IMDb'),
(3, 'Resident Evil 2 Remake', 'FPS',  '9/10', '59.99', 'Remake of Resident Evil 2, with a third-person over-the-shoulder view, new details, rearranged and new areas, no more loading screen doors, new puzzle solving opportunities, a gunpowder crafting mechanic and more. - IMDb'),
(4, 'Death Stranding', 'FPS',  '9/10', '59.99', 'Deliveryman Sam Porter must travel across a ravaged wasteland and reconnect the city states of America formed after a mysterious apocalyptic event dubbed 'death stranding' left the world in ruins and plagued by supernatural tar creatures. - IMDb'),
(5, 'Control', 'FPS',  '9/10', '59.99', "You are Jesse Faden, a young woman with a troubled past. You become the new Director of the Bureau of Control - Our frontline in researching and fighting against supernatural enemies like the Hiss threatening our very existence. - IMDb"),
(6, 'The Outer Worlds', 'FPS',  '9/10', '59.99', "Lost in transit while on a colonist ship bound for the furthest edge of the galaxy, you awake decades later only to find yourself in the midst of a deep conspiracy threatening to destroy the Halcyon colony. - IMDb"),
(7, 'Outer Wilds', 'FPS',  '9/10', '59.99', "Outer Wilds is an exploration game about curiosity, roasting marshmallows, and unraveling the mysteries of the cosmos. - IMDb"),
(8, 'Star Wars Jedi: Fallen Order', 'FPS',  '9/10', '59.99', "Set shortly after Revenge of the Sith, the player takes on the role of a Jedi padawan being hunted by the Empire after Order 66. - IMDb"),
(9, 'Apex Legends', 'FPS',  '9/10', '59.99', "A battle Royale set in the Titanfall universe, focusing on hero and team based combat. - IMDb"),
(10, 'The Legend of Zelda: Links Awakening', 'FPS',  '9/10', '59.99', "Remake of the Game Boy title The Legend of Zelda: Link's Awakening (1993) along with elements from the 1998 remaster The Legend of Zelda: Link's Awakening DX (1998). - IMDb"),
(11, 'Gears 5', 'FPS',  '9/10', '59.99', "As Kait you must journey across the biggest, most beautiful Gears world to uncover the origins of the Locust, and fight with your squad to protect what's left."),
(12, 'Astral Chain', 'FPS',  '9/10', '59.99', "Humanity's last chance against an interdimensional invasion is a special living weapon called the Legion. As a rookie officer in the elite police task force Neuron, you and your Legion will work together to solve cases and save humankind. - IMDb"),
(13, 'Devil May Cry 5', 'FPS',  '9/10', '59.99', "Years have passed since the legions of hell have set foot in this world, but now a new demonic invasion has begun, and humanity's last hope will rest in the hands of three lone demon hunters, each offering a radically different play style. - IMDb"),
(14, 'Borderlands 3', 'FPS',  '9/10', '59.99', "In this FPS/RPG, Troy and Tyreen Calypso learn of other Vaults beyond the planet Pandora, and form a violent cult named the 'Children of the Vault' to gain possession of them, while Lilith recruits the 'Vault Hunter' to get to them first."),
(15, 'Days Gone', 'FPS',  '9/10', '59.99', "Two years after a devastating global pandemic, bounty hunter Deacon St. John faces a brutal struggle for survival, and a reason to live. - IMDb"),
(16, 'Call of Duty: Modern Warfare', 'FPS',  '9/10', '59.99', "Captain Price and the SAS partner with the CIA and the Urzikstani Liberation Force to retrieve stolen chemical weapons. The fight takes you from London to the Middle East and beyond, as this joint task force battles to stop a global war. - IMDb"),
(17, 'Metro Exodus', 'FPS',  '9/10', '59.99', "26-year-old Artyom, flees the Metro in Moscow and sets off on a journey through the harsh nuclear winter in Russia. - IMDb"),
(18, 'Pokémon Sword and Shield', 'FPS',  '9/10', '59.99', "A story of young adults quest to become the best Pokémon trainer in the Galar Region. - IMDb"),
(19, 'Final Fantasy 14: Shadowbringers', 'FPS',  '9/10', '59.99', "Take part in the next saga of the critically acclaimed FINAL FANTASY® XIV Online with the next legendary expansion pack - SHADOWBRINGERS. - IMDb"),
(20, 'The Division 2', 'FPS',  '9/10', '59.99', "Set shortly after the first game's virus outbreak which wiped out large amounts of the population. This time however, the game is set in the somewhat sunnier Washington D.C and is focused on the rebuilding of society. - IMDb");

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
