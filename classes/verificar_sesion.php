<?php
	session_start();
	include_once("conexion.php");
	Conectarse();
	$sesion = 0;
	if(@$_SESSION){
		$sesion = $_SESSION['privilegios'];
		echo $sesion;
	}
?>