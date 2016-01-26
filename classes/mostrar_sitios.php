<?php
	session_start();
	include_once('conexion.php');
	Conectarse();
	if(@$_SESSION){
		if($_SESSION['privilegios'] == 2 || $_SESSION['privilegios'] == 3 ){

			$result = mysql_query("
				SELECT url FROM sitios;
			");
			$sitios = array();
			while($row = mysql_fetch_array($result)){
				$sitio = array();
				$sitio['url'] = $row['url'];
				array_push($sitios, $sitio);
			}
			echo json_encode($sitios);
		}else{
			echo 2;
		}
	}else{
		echo 2;
	}
	
?>