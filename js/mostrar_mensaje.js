function mostrar_mensaje(mensaje, color){
	$(".mensaje").hide();
	$(".mensaje").html('<span style=color:'+color+'>'+mensaje+'</span>');
	$(".mensaje").fadeIn("slow").delay(1000).fadeOut("slow");
}