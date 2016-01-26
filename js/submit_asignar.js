function sbtasignar(){
	
	var usuario = $("#usuariosel").val();
	var usuario_credencial = $("#usuario").val();
	var pass_credencial = $("#password").val();
	var pass_credencial2 = $("#repitepassword").val();
	var url = $("#urlsel").val();
	var respuesta = 0;
	var formData = new FormData($("#formularioasignar")[0]);
	if(usuario == "usuarios" || usuario_credencial == "" || pass_credencial == "" || url == "url"){
		//$(".mensaje").html("Complete todos los campos!");
		//$(".mensaje").fadeIn("slow").delay(1000).fadeOut("slow");	
		mostrar_mensaje("Complete todos los campos", "red");
	}else if(pass_credencial != pass_credencial2){
		mostrar_mensaje("Las contraseñas no coinciden", "red");
	}else{
	$.ajax({
        url: 'classes/asignar_usuario.php',  
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
				mostrar_mensaje("Usuario ya asignado a este sitio", "red");
			break;
			case '1':
				$("#username3").val("");
				$("#url3").val("");
				mostrar_mensaje("Registro exitoso", "green");
			break;
			case '2':
				location.href='login.html';
			break;
			case '3':
				mostrar_mensaje("El sitio ingresado no existe", "red");
			break;
			case '4':
				mostrar_mensaje("El usuario ingresado no existe", "red");
			break;
			}
    	}
    });
	}
}