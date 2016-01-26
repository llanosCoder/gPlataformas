<?php
	session_start();
	include_once('conexion.php');
	Conectarse();
	mysql_query("SET NAMES utf8");
	if(@$_SESSION){
		if($_SESSION['privilegios'] == 2 || $_SESSION['privilegios'] == 3){
			$titulo = $_POST['titulo'];
			$descripcion = $_POST['descripcion'];
			$url = $_POST['url'];
				$tamano = $_FILES [ 'screenshot' ][ 'size' ]; 
				$tamaño_max="20000000000"; 
				if( $tamano < $tamaño_max){ 
					$destino = 'img' ; 
					$sep=explode('image/',$_FILES["screenshot"]["type"]); 
					$tipo=$sep[1]; 
					if($tipo == "png" || $tipo == "jpeg" || $tipo == "bmp"){ 
						$nombreyformato = $destino . '/' . $titulo . date("d-m-Y H.i.s") . '.' . $tipo;
						move_uploaded_file ( $_FILES [ 'screenshot' ][ 'tmp_name' ], '../' . $nombreyformato);  
						$result = mysql_query("
							INSERT INTO sitios VALUES (null, '" . $titulo . "',
								'" . $descripcion . "',
								'" . $nombreyformato . "',
								'" . $url . "');
						");
						$ar = mysql_affected_rows();
						if($ar > 0){
							echo 1;
						}else{
							echo 0;
						}
					}
					else echo 4;
					}
					else echo 5;
		}else{
			echo 2;
		}
	}else{
		echo 2;
	}
?>