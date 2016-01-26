
$( document ).ready(function() {
	/*$(".footer2").hide();
	$(".footer3").hide();*/

});

$("#agregarusuario").click(function(){

	$(".camposvacios2").hide();
	var div = '<div class="usuarios">';
	div += '<form id="formulariousuario" method="post">';
	div += '<input class="form-control" type="text" id="username2" name="username" placeholder="Nombre de usuario" /><br>';
    div += '<input class="form-control" type="password" id="password2" name="password"  placeholder="Password" /><br>';
   	div += '<input class="form-control" type="password" id="repitepassword2" name="repitepassword"  placeholder="Repetir Password" /><br>';
    div += '<select id="permisos" name="permisos" class="form-control" color="#000000">';
	div += '<option value="0">Permisos</option>';
	div += '<option value="1">Usuario</option>';
	div += '<option value="2">Administrador</option>';
	div += '</select><br><br>';
    div += '<input type="button" onClick="sbtagregarusuario()" class="btn btn-default pull-right" value="Agregar Usuario">';
    div += '</form>';
    div += '<p class="mensaje"></p>';
	div += '</div>';

	$(".col-sm-12").fadeOut("slow", function(){
   		$(".col-sm-12").html("");

	$(".col-sm-12").append(div);
	$(".col-sm-12").fadeIn("slow");
	});

	/*$(".footer").hide();
	$(".footer3").hide();
	$(".footer2").fadeIn("slow");*/
});

$("#agregar").click(function(){

	var div = '<div class="admin">';
	div += '<form id="formulario" method="post" enctype="multipart/form-data">';
	div += '<input class="form-control" type="text" id="titulo" name="titulo" placeholder="Título" /><br>';
	div += '<input class="form-control" type="text" id="descripcion" name="descripcion" placeholder="Descripción" /><br>';
    div += '<input class="file" type="file" id="screenshot" name="screenshot"  placeholder="Imagen del sitio" /><br>        ';
    div += '<input class="form-control" type="text" id="url" name="url"  placeholder="URL del sitio" /><br>';
	div += '<input type="button" onClick="sbtagregar()" class="btn btn-default pull-right" value="Agregar Plataforma">';
    div += '</form>';
	div += '<p class="mensaje"></p>';
	div += '</div>';

	$(".col-sm-12").fadeOut("slow", function(){
   		$(".col-sm-12").html("");

	$(".col-sm-12").append(div);
	$(".col-sm-12").fadeIn("slow");
	});
	
	/*$(".footer").hide();
	$(".footer2").hide();
	$(".footer3").fadeIn("slow");*/
});

$("#mostrar").click(function(){

	$(".col-sm-12").fadeOut("slow", function(){
   		$(".col-sm-12").html("");

		mostrarplataformas();
		$(".col-sm-12").fadeIn("slow");
	});

	/*$(".footer2").hide();
	$(".footer3").hide();
	$(".footer").fadeIn("slow");*/
	

});

