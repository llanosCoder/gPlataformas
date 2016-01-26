function borrarsitio(id){
	if(confirm("¿Está seguro que desea borrar este sitio?")){
		$.get("classes/borrar_sitio.php?id="+id, function(data){
			if(data == 1){
				mostrarplataformas("sitioborrado");
			}else{
				mostrar_mensaje("No se pudo completar la acción", "red");
			}
		});
	}
}
