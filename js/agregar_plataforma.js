function sbtagregar(){


	var titulo = $("#titulo").val();
	var descripcion = $("#descripcion").val();
	var screenshot = $("#screenshot").val();
	var url = $("#url").val();
	if(titulo == "" || descripcion == "" || screenshot == "" || url == ""){
		mostrar_mensaje("Complete todos los campos", "red");
	}else{
		var respuesta = 0;	
		var formData = new FormData($("#formulario")[0]);
		$.ajax({
            url: 'classes/agregar_plataforma.php',  
            type: 'POST',
            // Form data
            //datos del formulario
            data: formData,
            //necesario para subir archivos via ajax
            cache: false,
            contentType: false,
            processData: false,
            //mientras enviamos el archivo
            success: function(data){
                respuesta = data;
			switch(respuesta){
				case '0':
				mostrar_mensaje("No se pudo agregar el sitio", "red");
				break;
				case '1':
					$("#titulo").val("");
					$("#descripcion").val("");
					$("#screenshot").val("");
					$("#url").val("");
					mostrar_mensaje("Registro exitoso", "green");
				break;
				case '2':
					location.href='login.html';
				break;
				case '4':
					mostrar_mensaje("Formato de imagen inválido", "red");
				break;
				case '5':
					mostrar_mensaje("La imagen excede el tamaño permitido", "red");
				break;
			}
            }
        });
	}
}