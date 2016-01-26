<?php
	session_start();
	include_once('conexion.php');
	Conectarse();
	$id = $_GET['id'];
	if(@$_SESSION){
		if($_SESSION['privilegios'] == 3){
			mysql_query("DELETE FROM sitios WHERE id=$id");
			mysql_query("DELETE FROM credenciales WHERE id_sitio=$id");
			mysql_query("DELETE FROM acceso WHERE id_plataforma=$id");
			echo 1;
		}else{
			echo 0;
		}
	}else{
		echo 0;
	}
?>
