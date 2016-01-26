var privilegios = 0;
$( document ).ready(function() {
	$.get("classes/verificar_sesion.php", function(data){
		privilegios = data;
		if(data == 0){

			location.href='login.html';
		}else{
			if(privilegios == 1){
				$(".divider").hide();
				$("#agregar").hide();
				$("#mostrar").hide();
				$("#agregarusuario").hide();
				$("#asignarusuario").hide();
				$("#eliminarsitio").hide();
			}
		}
	});
	mostrarplataformas();
});

$("#cerrarsesion").click(function(){
	if(confirm("¿Está seguro que desea cerrar sesión?")){
		$.get("classes/cerrar_sesion.php", function(data){
			if(data == 1){
				location.href='login.html';
			}else{
				alert("No se pudo cerrar su sesión");
			}
		});
	}
});


