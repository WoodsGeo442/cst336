{"filter":false,"title":"quotes-db.sql","tooltip":"/labs/lab9/sql/quotes-db.sql","undoManager":{"mark":0,"position":-1,"stack":[[{"start":{"row":8,"column":0},"end":{"row":20,"column":61},"action":"remove","lines":["DROP TABLE IF EXISTS `l9_author`;","CREATE TABLE `l9_author` (","  `authorId` mediumint(9) NOT NULL,","  `firstName` varchar(25) COLLATE utf8_unicode_ci NOT NULL,","  `lastName` varchar(25) COLLATE utf8_unicode_ci NOT NULL,","  `dob` date NOT NULL,","  `dod` date DEFAULT NULL,","  `sex` char(1) COLLATE utf8_unicode_ci NOT NULL,","  `profession` varchar(50) COLLATE utf8_unicode_ci NOT NULL,","  `country` varchar(25) COLLATE utf8_unicode_ci NOT NULL,","  `portrait` varchar(200) COLLATE utf8_unicode_ci NOT NULL,","  `biography` varchar(500) COLLATE utf8_unicode_ci NOT NULL",") ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;"],"id":2},{"start":{"row":8,"column":0},"end":{"row":11,"column":25},"action":"insert","lines":["SET SQL_MODE = \"NO_AUTO_VALUE_ON_ZERO\";","SET AUTOCOMMIT = 0;","START TRANSACTION;","SET time_zone = \"+00:00\";"]}]]},"ace":{"folds":[],"scrolltop":120,"scrollleft":0,"selection":{"start":{"row":81,"column":48},"end":{"row":81,"column":48},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":true,"wrapToView":true},"firstLineState":{"row":26,"state":"start","mode":"ace/mode/sql"}},"timestamp":1587355523375,"hash":"2a1076a54759af4b5343469872b397d6ff9b3713"}