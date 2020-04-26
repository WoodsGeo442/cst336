SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

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

ALTER TABLE `loginInfo`
  ADD PRIMARY KEY (`loginId`);
  
ALTER TABLE `loginInfo`
  MODIFY `loginId` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
  
COMMIT;
