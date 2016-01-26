window.onbeforeunload = function(){
	$.get("classes/cerrar_sesion.php", function(data){
		success = data;
	});
}