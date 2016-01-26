$( document ).ready(function() {
	$( ".loginincorrecto" ).hide();
	$( ".camposvacios" ).hide();
});

$("#btnlogin").click(function(){
	var usuario = $("#usuario").val();
	var pass = $("#password").val();
	var success = 0;
	if(usuario == "" || pass == ""){
		mostrar_mensaje("Complete todos los campos", "red");
	}else{
		$.get("classes/login.php?u="+usuario+"&p="+pass, function(data){
			success = data;
			switch(success){
				case '0':
					mostrar_mensaje("Credenciales incorrectas", "red");
				break;
				case '1':
					location.href='index.html';
				break;
			}
		});
	}
});
