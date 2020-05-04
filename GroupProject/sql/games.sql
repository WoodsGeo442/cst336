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
    `pricing`  varchar(500) COLLATE utf8_unicode_ci NOT NULL,
    `companyName`  varchar(500) COLLATE utf8_unicode_ci NOT NULL,
    `summary`  varchar(500) COLLATE utf8_unicode_ci NOT NULL,
    `cover` varchar(500) COLLATE utf8_unicode_ci NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `videoGames` (`videogame_id`, `title`, `genre`, `rating`, `pricing`, `companyName`, `summary`, `cover`) VALUES
(1, 'DOOM', 'FPS',  '9/10', '59.99', 'id Software', 'Hells armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.', 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Cover_Art_of_Doom_Eternal.png/220px-Cover_Art_of_Doom_Eternal.png'),
(2, 'Sekiro: Shadows Die Twice', 'Action',  '9/10', '59.99', 'FromSoftware', 'In Sekiro: Shadows Die Twice you are the “one-armed wolf”, a disgraced and disfigured warrior rescued from the brink of death. Bound to protect a young lord who is the descendant of an ancient bloodline, you become the target of many vicious enemies, including the dangerous Ashina clan. When the young lord is captured, nothing will stop you on a perilous quest to regain your honor, not even death itself.', 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Sekiro_art.jpg/220px-Sekiro_art.jpg'),
(3, 'Resident Evil 2 Remake', 'Horror',  '9/10', '39.99', 'CAPCOM', 'The action centers around rookie cop Leon Kennedy and college student Claire Redfield as they fight to survive a mysterious viral outbreak within Raccoon City.', 'https://upload.wikimedia.org/wikipedia/en/f/fd/Resident_Evil_2_Remake.jpg'),
(4, 'Death Stranding', 'Action',  '8/10', '59.99', 'Kojima Productions', 'From legendary game creator Hideo Kojima comes an all-new, genre-defying experience. Sam Bridges must brave a world utterly transformed by the Death Stranding. Carrying the disconnected remnants of our future in his hands, he embarks on a journey to reconnect the shattered world one step at a time.', 'https://steamcdn-a.akamaihd.net/steam/apps/1190460/header.jpg?t=1588149826'),
(5, 'Control', 'Third-Person Shooter',  '8/10', '59.99', 'Remedy Entertainment', 'After a secretive agency in New York is invaded by an otherworldly threat, you become the new Director struggling to regain Control in this supernatural 3rd person action-adventure from Remedy Entertainment and 505 Games', 'https://steamcdn-a.akamaihd.net/steam/apps/870780/header.jpg?t=1572428374'),
(6, 'The Outer Worlds', 'RPG',  '8/10', '59.99', 'Obisidan Entertainment', 'The Outer Worlds is a new single-player sci-fi RPG from Obsidian Entertainment and Private Division. As you explore a space colony, the character you decide to become will determine how this player-driven story unfolds. In the corporate equation for the colony, you are the unplanned variable.', 'https://steamcdn-a.akamaihd.net/steam/apps/578650/header.jpg?t=1557253926'),
(7, 'Outer Wilds', 'Action',  '8/10', '19.99', 'Mobius Digital', 'Named Game of the Year 2019 by Giant Bomb, Polygon, Eurogamer, and The Guardian, Outer Wilds is a critically-acclaimed and award-winning open world mystery about a solar system trapped in an endless time loop.', 'https://steamcdn-a.akamaihd.net/steam/apps/753640/header.jpg?t=1588186650'),
(8, 'Star Wars Fallen Order', 'Action', '7/10', '35.99', 'Respawn Entertainment', 'A galaxy-spanning adventure awaits in Star Wars Jedi: Fallen Order, a 3rd person action-adventure title from Respawn. An abandoned Padawan must complete his training, develop new powerful Force abilities, and master the art of the lightsaber - all while staying one step ahead of the Empire.', 'https://steamcdn-a.akamaihd.net/steam/apps/1172380/header.jpg?t=1588279360'),
(9, 'Apex Legends', 'FPS',  '8/10', 'FREE', 'Electronics Arts', 'Choose from a lineup of outlaws, soldiers, misfits, and misanthropes, each with their own set of skills. The Apex Games welcome all comers – survive long enough, and they call you a Legend.', 'https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Apex_legends_cover.jpg/220px-Apex_legends_cover.jpg'),
(10, 'Zelda: Links Awakening', 'Action',  '8/10', '29.99', 'Grezzo', 'As Link, you awaken in a strange land away from Hyrule, where animals talk and monsters roam. To uncover the truth behind your whereabouts and rouse the legendary Wind Fish, explore Koholint Island and all its trap-ridden dungeons, reimagined in stunning detail for this new release of one of the most beloved The Legend of Zelda games. Along the way, you’ll meet a hilarious assortment of charming characters to which you’ll never want to say goodbye.', 'https://www.nintendo.com/content/dam/noa/en_US/games/switch/t/the-legend-of-zelda-links-awakening-switch/the-legend-of-zelda-links-awakening-switch-hero.jpg'),
(11, 'Gears 5', 'Third-Person Shooter',  '6/10', '59.99', 'The Coalition', 'Free update, Operation 3: Gridiron, is now available. Use Cole and Clayton Carmine’s new abilities in Horde and Escape and try the new Gridiron mode. From one of gaming’s most acclaimed sagas, Gears is bigger than ever, with five thrilling modes and the deepest campaign yet.', 'https://steamcdn-a.akamaihd.net/steam/apps/1097840/header.jpg?t=1588085716'),
(12, 'Astral Chain','Action',  '9/10', '59.99', 'PlatinumGames', 'The few survivors of a massive global disaster gather together in a futuristic megacity. Now it’s your job to protect them against otherworldly invaders–but you’re not alone as a member of a special police task force equipped with sentient armaments called Legions. In this brand-new action game from PlatinumGames, control the protagonist and a Legion simultaneously to chain stylish combos.', 'https://www.nintendo.com/content/dam/noa/en_US/games/switch/a/astral-chain-switch/astral-chain-switch-hero.jpg'),
(13, 'Devil May Cry 5', 'Action',  '9/10', '39.99', 'Ninja Theory', 'The ultimate Devil Hunter is back in style, in the game action fans have been waiting for.', 'https://steamcdn-a.akamaihd.net/steam/apps/601150/header.jpg?t=1582605276'),
(14, 'Borderlands 3', 'FPS',  '9/10', '59.99', 'Gearbox Software', 'The original shooter-looter returns, packing bazillions of guns and a mayhem-fueled adventure! Blast through new worlds & enemies and save your home from the most ruthless cult leaders in the galaxy.', 'https://steamcdn-a.akamaihd.net/steam/apps/397540/header.jpg?t=1587675179'),
(15, 'Days Gone', 'Horror',  '6/10', '39.99', 'SIE Bend Studio', 'At its core, Days Gone is about survivors and what makes them human: desperation, loss, madness, betrayal, friendship, brotherhood, regret, love—and hope. Its about how, even when confronted with such enormous tragedy, hope never dies.', 'https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP9000-CUSA08966_00-DAYSGONECOMPLETE/1588468778000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000'),
(16, 'Modern Warfare', 'FPS',  '8/10', '59.99', 'Infinity Ward', 'Play the blockbuster Campaign, engage in thrilling Multiplayer combat, squad up in cooperative Special Ops experiences, and drop into the massive Battle Royale arena with Warzone.', 'https://hb.imgix.net/d9ffbcf4aa5df29167b21484b9aac12507a9deb9.jpg?auto=compress,format&fit=crop&h=353&w=616&s=523a92154bf15e96dc83c5c113f93bcf'),
(17, 'Metro Exodus', 'FPS',  '8/10', '39.99', '4A Games', 'Flee the shattered ruins of the Moscow Metro and embark on an epic, continent-spanning journey across the post-apocalyptic Russian wilderness. Explore vast, non-linear levels, lose yourself in an immersive, sandbox survival experience, and follow a thrilling story-line.', 'https://steamcdn-a.akamaihd.net/steam/apps/412020/header.jpg?t=1582550242'),
(18, 'Pokémon Sword and Shield', 'RPG',  '8/10', '59.99', 'Game Freak', 'A new generation of Pokémon is coming to the Nintendo Switch™ system. Begin your adventure as a Pokémon Trainer by choosing one of three new partner Pokémon: Grookey, Scorbunny, or Sobble. Then embark on a journey in the new Galar region, where you’ll challenge the troublemakers of Team Yell, while unraveling the mystery behind the Legendary Pokémon Zacian and Zamazenta!', 'https://www.nintendo.com/content/dam/noa/en_US/games/switch/p/pokemon-shield-switch/pokemon-shield-switch-hero.jpg'),
(19, 'Final Fantasy 14', 'RPG',  '9/10', '39.99', 'Square Enix', 'Take part in an epic and ever-changing FINAL FANTASY as you adventure and explore with friends from around the world.', 'https://steamcdn-a.akamaihd.net/steam/apps/39210/header.jpg?t=1587567669'),
(20, 'The Division 2', 'Third-Person Shooter',  '8/10', '59.99', 'Ubisoft', 'You are a member of the Division, an elite group of civilian agents charged with being the last line of defense. With DC at risk, its time to gear up and use your unique skills to take on this new threat.', 'https://upload.wikimedia.org/wikipedia/en/a/af/The_Division_2_art.jpg');

-- CREATE TABLE FOR GAME DEVELOPERS
DROP TABLE IF EXISTS `gameDevelopers`;
CREATE TABLE `gameDevelopers`(
    -- gameDevelopers_id, company_name;
    `gameDevelopers_id` mediumint(20) NOT NULL,
    `company_name`      varchar(50) COLLATE utf8_unicode_ci NOT NULL,
    `logo`      varchar(500) COLLATE utf8_unicode_ci NOT NULL,
    `summary`      varchar(500) COLLATE utf8_unicode_ci NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `gameDevelopers` (`gameDevelopers_id`, `company_name`, `logo`, `summary`) VALUES
(1, 'id Software', 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Id_Software.svg/220px-Id_Software.svg.png', 'We are a studio guided by the basic principle of making the most innovative and immersive worlds possible, powered by leading-edge technology, to deliver an intense gaming experience.'),
(2, 'FromSoftware', 'https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Fromsoftware_logo.svg/220px-Fromsoftware_logo.svg.png', 'FromSoftware, Inc. is a Japanese video game development company founded in November 1986. The company is best known for the Armored Core and Souls series, as well as Bloodborne and Sekiro: Shadows Die Twice.'),
(3, 'CAPCOM', 'https://cdn.capcom-unity.com/capcom-unity.com/user/dubindoh/dda5aa0a1f09db88820c33b3fa909175.jpg?v=135000', 'Capcom. Capcom began in Japan in 1979 as a manufacturer and distributor of electronic game machines. ... Now an industry leader in the video game industry for 25 years, Capcoms legacy of historic franchises in home and arcade gaming are testaments to an unparalleled commitment to excellence.'),
(4, 'Kojima Productions', 'https://pbs.twimg.com/profile_images/739989332262428672/msjM1LPh_400x400.jpg', 'Kojima Productions Co., Ltd. is a Japanese video game development studio founded in 2005 by video game designer Hideo Kojima, creator of the Metal Gear series. It was established as a subsidiary of Konami in Tokyo. '),
(5, 'Remedy Entertainment', 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Remedy_Entertainment_logo.svg/220px-Remedy_Entertainment_logo.svg.png', 'Remedy Entertainment Oyj is a Finnish video game developer based in Espoo. Notable games the studio has developed include the first two instalments in the Max Payne franchise, Alan Wake, Quantum Break and Control.'),
(6, 'Obisidan Entertainment', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Obsidian_Entertainment.svg/220px-Obsidian_Entertainment.svg.png', 'Obsidian Entertainment, Inc. is an American video game developer based in Irvine, California. It was founded in June 2003, shortly before the closure of Black Isle Studios, by ex-Black Isle employees Feargus Urquhart, Chris Avellone, Chris Parker, Darren Monahan, and Chris Jones.'),
(7, 'Mobius Digital', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Rockstar_Leeds_Logo.svg/220px-Rockstar_Leeds_Logo.svg.png', 'Rockstar Leeds Limited is a British video game developer and a studio of Rockstar Games based in Leeds. The company was founded as Möbius Entertainment in December 1997, by Gordon Hall, Jason McGann, Dave Box and Ian J. Bowden.'),
(8, 'Respawn Entertainment', 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Respawn_Entertainment_Logo%2C_2013.png/220px-Respawn_Entertainment_Logo%2C_2013.png', 'Respawn Entertainment, LLC is an American video game development studio founded by Jason West and Vince Zampella. West and Zampella previously co-founded Infinity Ward and created the Call of Duty franchise, where they were responsible for its development until 2010.'),
(9, 'Electronics Arts', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Electronic-Arts-Logo.svg/150px-Electronic-Arts-Logo.svg.png', 'Electronic Arts Inc. is an American video game company headquartered in Redwood City, California. It is the second-largest gaming company in the Americas and Europe by revenue and market capitalization after Activision Blizzard and ahead of Take-Two Interactive and Ubisoft as of March 2018.'),
(10, 'Grezzo', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Grezzo_logo.png/220px-Grezzo_logo.png', 'Grezzo is a Japanese video game developer. It was founded in December 2006. Koichi Ishii, known for his work on the Mana series of games by Square Enix, was hired as CEO and president of the company in April 2007.'),
(11, 'The Coalition', 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/The_Coalition_Logo.png/220px-The_Coalition_Logo.png', 'The Coalition is a Canadian video game developer and a studio of Xbox Game Studios based in Vancouver. The Coalition is best known for developing games in the Gears of War series after the franchises acquisition by Xbox Game Studios from Epic Games.'),
(12, 'PlatinumGames', 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/PlatinumGames_Inc..png/220px-PlatinumGames_Inc..png', 'PlatinumGames Inc. is a Japanese video game developer that was founded in October 2007 as result of a merger between two companies, Seeds Inc. and Odd Inc. Shinji Mikami, Atsushi Inaba, and Hideki Kamiya founded Seeds Inc. after the closure of Capcoms Clover Studio, while Odd Inc. was founded by Tatsuya Minami.'),
(13, 'Ninja Theory', 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Ninja_Theory.svg/220px-Ninja_Theory.svg.png', 'Ninja Theory Limited is a British video game development studio based in Cambridge, England. Notable games it has developed include Kung Fu Chaos, Heavenly Sword, Enslaved: Odyssey to the West, DmC: Devil May Cry and Hellblade: Senuas Sacrifice.'),
(14, 'Gearbox Software', 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Gearbox_Software_logo.svg/220px-Gearbox_Software_logo.svg.png', 'Gearbox Software, L.L.C. is an American video game development company based in Frisco, Texas. It was established in February 1999 by five developers formerly of Rebel Boat Rocker. Randy Pitchford, one of the founders, serves as president and chief executive officer.'),
(15, 'SIE Bend Studio', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/SIE_Bend_Studio_logo.png/220px-SIE_Bend_Studio_logo.png', 'SIE Bend Studio is an American first-party video game developer founded in Bend, Oregon in 1993. They were acquired by Sony Computer Entertainment in 2000 and are best known for developing the Syphon Filter series.'),
(16, 'Infinity Ward', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/New_Infinity_Ward_Logo%2C_2016.png/220px-New_Infinity_Ward_Logo%2C_2016.png', 'Infinity Ward, Inc. is an American video game developer. They developed the video game Call of Duty, along with seven other installments in the Call of Duty series. Vince Zampella, Grant Collier, and Jason West established Infinity Ward in 2002 after working at 2015, Inc. previously.'),
(17, '4A Games', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/4A_Games_Logo_2015.svg/220px-4A_Games_Logo_2015.svg.png', '4A Games Limited is a Ukrainian-Maltese video game developer based in Sliema, Malta. The company was founded in Kiev, Ukraine, in 2006 by three developers who departed from GSC Game World. In 2014, 4A Games moved its headquarters to Sliema, wherein the Kiev office was retained as a sub-studio.'),
(18, 'Game Freak', 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Game_Freak_logo.png/220px-Game_Freak_logo.png', 'Game Freak Inc. is a Japanese video game developer, best known as the primary developer of the Pokémon series of role-playing video games published by Nintendo.'),
(19, 'Square Enix', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Square_Enix_logo.svg/230px-Square_Enix_logo.svg.png', 'Square Enix Holdings Co., Ltd. is a Japanese video game developer, publisher, and distribution company known for its Final Fantasy, Dragon Quest, and Kingdom Hearts role-playing video game franchises, among numerous others.'),
(20, 'Ubisoft', 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Ubisoft_2017.svg/220px-Ubisoft_2017.svg.png', 'Ubisoft Entertainment SA is a French video game company headquartered in Montreuil with several development studios across the world. It publishes games for several video game franchises, including Rayman, Raving Rabbids, Prince of Persia, Assassins Creed, Far Cry, Just Dance, and Tom Clancy. ');

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
