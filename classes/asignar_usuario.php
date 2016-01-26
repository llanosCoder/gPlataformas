<?php
	session_start();
	include_once('conexion.php');
	Conectarse();
	if(@$_SESSION){
		if($_SESSION['privilegios'] == 2 || $_SESSION['privilegios'] == 3){
			$usuario = $_POST['username'];
			$usuario_credencial = $_POST['usuario'];
			$password_credencial = $_POST['password'];
			$url = $_POST['url'];
			$consulta_usuario = mysql_query("
				SELECT id FROM usuarios WHERE username ='" . $usuario . "'; 
			");
			if(mysql_num_rows($consulta_usuario) > 0){
				$row_usuario = mysql_fetch_array($consulta_usuario);
				$consulta_sitio = mysql_query("
					SELECT id FROM sitios WHERE url='" . $url . "' 
				");
				$row_sitio = mysql_fetch_array($consulta_sitio);
				if(mysql_num_rows($consulta_sitio) > 0){
					$usu_id = $row_usuario['id'];
					$sitio_id = $row_sitio['id'];
					$consulta_acceso = mysql_query("
						SELECT count(*) FROM acceso WHERE id_usuario=$usu_id AND id_plataforma=$sitio_id;
					");
					$row_acceso = mysql_fetch_array($consulta_acceso);
					if($row_acceso['count(*)'] > 0){
						echo 0;
					}else{
						$result = mysql_query("
							INSERT INTO acceso VALUES (null,
							" . $usu_id . ",
							" . $sitio_id . ");
						");
						$ar = mysql_affected_rows();
						if($ar > 0){
							$result = mysql_query("
								INSERT INTO credenciales VALUES ("
								 	. $usu_id . ", 
									" . $sitio_id . ", 
									'" . $usuario_credencial . "', 
									'" . $password_credencial . "');
							");
							$ar2 = mysql_affected_rows();
							if($ar2 > 0){
								echo 1;
							}else{
								echo 0;
							}
						}else{
							echo 0;
						}
					}
				}else{
					echo 3;
				}
			}else{
				echo 4;
			}
		}else{
			echo 2;
		}
	}else{
		echo 2;
	}
?>