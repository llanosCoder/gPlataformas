<?php
	session_start();
	include_once('conexion.php');
	Conectarse();
	if(@$_SESSION){
		if($_SESSION['privilegios'] == 2 || $_SESSION['privilegios'] == 3){

			$result = mysql_query("
				SELECT username FROM usuarios;
			");
			$usuarios = array();
			while($row = mysql_fetch_array($result)){
				$usuario = array();
				$usuario['username'] = $row['username'];
				array_push($usuarios, $usuario);
			}
			echo json_encode($usuarios);
		}else{
			echo 2;
		}
	}else{
		echo 2;
	}
	
?>