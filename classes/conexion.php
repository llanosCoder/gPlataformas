<?php 

$base="gestsol_plataformas";

function Conectarse() 
{ 
   if (!($link=mysql_connect("localhost","root","pepita"))) 
   { 
      echo "Error conectando a la base de datos."; 
      exit(); 
   } 
   if (!mysql_select_db("gestsol_plataformas",$link)) 
   { 
      echo "Error seleccionando la base de datos."; 
      exit(); 
   } 
   return $link; 
} 

Conectarse()
?>
