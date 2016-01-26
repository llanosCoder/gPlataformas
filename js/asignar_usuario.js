$("#asignarusuario").click(function(){
	alert =" ehwieqw";
	var div = '<div class="asignar">';
	div += '<form id="formularioasignar" method="post">';
	div += "<select id='usuariosel' name='username' class='form-control'>";
	div += '<option value="0">Usuarios</option>';
	div += '</select><br>';
	div += '<input class="form-control" type="text" id="usuario" name="usuario" '
			+'placeholder="Credencial de Usuario" /><br>';
    div += '<input class="form-control" type="password" id="password" name="password" '
    		+'placeholder="Password de credencial" /><br>';
    div += '<input class="form-control" type="password" id="repitepassword" name="repitepassword" '
    		+'placeholder="Repetir Password de credencial" /><br>';
    div += '<select id="urlsel" name="url" class="form-control" color="#000000">';
	div += '<option value="0">Sitios</option>';
	div += '</select><br><br>';
    div += '<input type="button" onClick="sbtasignar();" class="btn btn-default pull-right" value="Asignar Usuario">';
    div += '</form>';
    div += '<p class="mensaje"></p>';
	div += '</div>';

	$(".col-sm-12").fadeOut("slow", function(){
   		$(".col-sm-12").html("");

		$(".col-sm-12").append(div);

		$(".contrasenasdiferentes3").hide();
		$(".camposvacios3").hide();
		$(".registrocorrecto3").hide();
		$(".registroincorrecto3").hide();
		$(".usuarioincorrecto").hide();
		$(".sitioincorrecto").hide();

		$(".col-sm-12").fadeIn("slow");
		$('#usuariosel').html("");
		$.get("classes/mostrar_usuarios.php", function(data){
			data = $.parseJSON(data);
			var options = '<option value="usuarios">Usuarios</option>';
			$.each(data, function(i, option) {
				options += '<option value=\"'+ option.username+'\">'+option.username+'</option>';	
			});
			$("#usuariosel").append(options);
		});
		$("#urlsel").html("");
		$.get("classes/mostrar_sitios.php", function(data){
			data = $.parseJSON(data);
			var options = '<option value="url">Sitios</option>';
			$.each(data, function(i, option) {
				options += '<option value="'+ option.url+'">'+option.url+'</option>';	
			});
			$("#urlsel").append(options);
		});
	});

	/*$(".footer3").hide();
	$(".footer2").fadeIn("slow");*/
});
