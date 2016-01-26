<?php
	session_start();
	include_once('conexion.php');
	Conectarse();
	$usuario = $_GET['u'];
	$pass = $_GET['p'];
	$pass = md5($pass);
	$result = mysql_query("
			SELECT id, username, privilegios FROM usuarios WHERE username='" . $usuario . "' AND password='" . $pass . "';
		");
	if(mysql_num_rows($result) > 0){
		$row = mysql_fetch_array($result);
		$_SESSION['id'] = $row['id'];
		$_SESSION['privilegios'] = $row['privilegios'];
		echo 1;
	}else{
		echo 0;
	}
	
?>