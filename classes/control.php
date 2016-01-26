<?php
	session_start();
	include_once('conexion.php');
	Conectarse();
	mysql_query("SET NAMES utf8");
	if(@$_SESSION){
		$usuario = $_SESSION['id'];
		if($_SESSION['privilegios'] == 2 || $_SESSION['privilegios'] == 3){
			$result = mysql_query("
				SELECT sitios.id, titulo, screenshot, url, descripcion FROM sitios;
			");	
		}else{
			$result = mysql_query("
				SELECT sitios.id, titulo, screenshot, url, descripcion FROM sitios, acceso WHERE id_usuario=" . $usuario . " AND id_plataforma=sitios.id;
			");
		}

		$sitios = array();
		while($row = mysql_fetch_array($result)){
			$result_credenciales = mysql_query("
				SELECT * FROM credenciales WHERE id_sitio=" . $row['id'] . " AND id_usuario=" . $_SESSION['id'] . "
			");

			$row_credenciales = mysql_fetch_array($result_credenciales);
			$sitio = array();
			$sitio['id'] = $row['id'];
			$sitio['titulo'] = $row['titulo'];
			$sitio['descripcion'] = $row['descripcion'];
			$sitio['usuario'] = $row_credenciales['username'];
			$sitio['pass'] = $row_credenciales['password'];
			$sitio['screenshot'] = $row['screenshot'];
			$sitio['url'] = $row['url'];
			array_push($sitios, $sitio);
		}
		echo json_encode($sitios);
	}else{
		$sitio = array();
          $sitio['url'] = 0;
          array_push($sitios, $sitio);
          echo json_encode($sitios);
	}
?>