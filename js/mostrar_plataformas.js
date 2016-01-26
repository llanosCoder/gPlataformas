function mostrarplataformas(){
	$.get("classes/control.php", function(data){
		data = $.parseJSON(data);
		var contador = 0;
		var passc = "";
		var btn = "";
		var btn_borrar = "";
		$(".col-sm-12").html("");
		$.each(data, function(i, sitio) {
			if(sitio['url'] != 0){

				passc = "pass"+contador;
				btn = "btn"+contador;
				brn_borrar = "btn_borrar"+contador;
				if(sitio.url.substr(0,7) != 'http://'){
					sitio.url = 'http://' + sitio.url;
				}
				var div = '<div class="panel panel-default">';
          		div += '<div class="panel-heading">'+sitio.titulo;
          		if(privilegios == 3){
					var btn_borrar = "btn_borrar"+contador;
					div +="<button class='btn btn-default pull-right btn-xs btn-danger' id="+btn_borrar+ 
					" onClick=\"borrarsitio('"+sitio.id+"');\">";
					div += "<i class='fa fa-times-circle'></i></button>";

				}
				div += '</div>';
          		div += '<div class="panel-body">';
            	div += '<div class="col-sm-4 pull-left">';
                div += '<img class="img-responsive" id="imagen" src="'+sitio.screenshot+'" alt="Imagen por defecto" />';
                div += '<br />';
            	div += '</div>';
            	div += '<div class="col-sm-6 pull-center">';
            	div += sitio.descripcion+'<br /><br />';
            	div += '</div>';
            	div += '<div class="col-sm-2  text-center">';
                div += '<div class="panel panel-default">';
                div += '<div class="panel-body  text-left">';

                if (  sitio.usuario === null){
					div += '<p>Usuario: No asignado</p>';
				}else{
					div += '<p>Usuario: '+sitio.usuario+'</p>';
				}
                
				if( sitio.pass === null){
					div += '<p><h5 class="pass'+contador+'"><label id="'+passc+'">Pass *******</label></h5></p>';
				}else{
					div += '<p><h5 class="pass'+contador+'"><label id="'+passc+'">Pass *******</label></h5></p>';
					div += "<button class='btn btn-default' id="+btn+" onClick=\"mostrarpass('"+sitio.pass+"','"+passc+"','"+btn+"')\">";
					div += '<i class="fa fa-eye"></i></button>';
				}
				
				div += '<hr>';
                div += '<p class="text-center"><a href="'+sitio.url+'"<button class="btn btn-info "><i class="fa fa-sign-in "></i>&nbspAcceder</button></p>';
                div += '</div>';
                div += '</div>';
           		div += '</div>';
          		div += '</div>';
        		div += '</div>';
        		div += '<hr>';
        		contador++;
        	$(".col-sm-12").hide();
			$(".col-sm-12").append(div);
			$(".col-sm-12").fadeIn("medium");
			}else{
				location.href='login.html';
			}
		});
		var mensaje = '<p class="mensaje"></p><br><br>';
		$(".col-sm-12").append(mensaje);
		if(contador == 0){
			var div = '<div class="panel panel-default text-center">Ud. no cuenta con sitios asignados</div>';
			$(".col-sm-12").append(div);
		}
	});
}