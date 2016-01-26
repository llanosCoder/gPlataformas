<?php
	session_start();
	include_once('conexion.php');
	Conectarse();
	if(@$_SESSION){
		if($_SESSION['privilegios'] == 2 || $_SESSION['privilegios'] == 3){
			$usuario = $_POST['username'];
			$password = $_POST['password'];
			$password = md5($password);
			$repitepassword = $_POST['repitepassword'];
			$repitepassword = md5($repitepassword);
			$permisos = $_POST['permisos'];
			$consulta_usuario = mysql_query("
				SELECT id FROM usuarios WHERE username ='" . $usuario . "'; 
			");
			if(mysql_num_rows($consulta_usuario) > 0){
				echo 4;
			}else{
				if($password == $repitepassword){
					$result = mysql_query("
						INSERT INTO usuarios VALUES (null,
							'" . $usuario . "',
							'" . $password . "',
							'" . $permisos . "');
					");
					$ar = mysql_affected_rows();
					if($ar > 0){
						echo 1;
					}else{
						echo 0;
					}
				}else{
					echo 3;
				}
			}
			}else{
				echo 2;
			}
	}else{
		echo 2;
	}
?>