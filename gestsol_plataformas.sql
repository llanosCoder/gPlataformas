-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-07-2014 a las 22:29:49
-- Versión del servidor: 5.6.16
-- Versión de PHP: 5.5.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `gestsol_plataformas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `acceso`
--

CREATE TABLE IF NOT EXISTS `acceso` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `id_plataforma` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Volcado de datos para la tabla `acceso`
--

INSERT INTO `acceso` (`id`, `id_usuario`, `id_plataforma`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 6, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sitios`
--

CREATE TABLE IF NOT EXISTS `sitios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(50) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `pass` varchar(50) NOT NULL,
  `screenshot` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `sitios`
--

INSERT INTO `sitios` (`id`, `titulo`, `descripcion`, `usuario`, `pass`, `screenshot`, `url`) VALUES
(1, 'Monitor Pullman', 'Un mantenedor con las funciones b&aacute;sicas de adici&oacute;n, edici&oacute;n y eliminaci&oacute;n de registros para el monitoreo de Pullman Bus.', 'cleiva', '25soporte25', 'img/pullman.png', 'http://localhost/monitoreopullman/index.html'),
(2, 'i-site', 'Sitio para encontrar muchas cosas &uacute;tiles en la ciudad.', 'isite', 'isi12345', 'img/isite.png', 'http://i-site.co'),
(3, 'Sitio prueba final', 'Sitio para probar pruebas finales.', 'usuario', 'pass', 'img/Sitio prueba final29-07-2014 15.52.06.png', 'www.estoesunapruebafinal.cl'),
(4, 'Prueba 2', 'Este sitio solo servira a modo de prueba, no existe en la vida real y si llegara a existir es una mera coincidencia. No creo que estes leyendo esto.', 'user', 'pass', 'img/Prueba 229-07-2014 18.46.21.png', 'www.estesitioesunaprueba.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL,
  `privilegios` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `password`, `privilegios`) VALUES
(1, 'cleiva', '25soporte25', 1),
(2, 'isite', 'isi12345', 1),
(3, 'admin', 'admin', 2),
(4, 'jllanos', 'pass', 2),
(5, 'admin2', 'admin', 2),
(6, 'prueba', 'asd', 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
