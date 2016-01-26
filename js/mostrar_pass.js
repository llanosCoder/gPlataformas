function mostrarpass(passw, i, btn){
	if($("#"+btn).html() == '<i class="fa fa-eye"></i>'){
		document.getElementById(i).innerHTML = "Pass " + passw;
		$("#"+btn).html('<i class="fa fa-eye-slash"></i>');
	}else{
		document.getElementById(i).innerHTML = "Pass *******";
		$("#"+btn).html('<i class="fa fa-eye"></i>');
	}
	
}