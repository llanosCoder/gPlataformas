function sbtagregarusuario(){
	var usuario = $("#username2").val();
	var password = $("#password2").val();
	var repitepassword = $("#repitepassword2").val();
	var permisos = $("#permisos").val();
	var respuesta = 0;
	var formData = new FormData($("#formulariousuario")[0]);
	if(usuario == "" || password == "" || repitepassword == "" || permisos == "0" || permisos == ""){
		mostrar_mensaje("Complete todos los campos", "red");
	}else{
	$.ajax({
        url: 'classes/agregar_usuario.php',  
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
				mostrar_mensaje("No se pudo registrar el usuario", "red");
			break;
			case '1':
				$("#username2").val("");
				$("#password2").val("");
				$("#repitepassword2").val("");
				$("#permisos").val("0");
				mostrar_mensaje("Registro exitoso", "green");
			break;
			case '2':
				location.href='login.html';
			break;
			case '3':
				mostrar_mensaje("Las contraseñas no coinciden", "red");
			break;
			case '4':
				mostrar_mensaje("El nombre de usuario ya existe", "red");
			break;
			}
    	}
    });
	}
}