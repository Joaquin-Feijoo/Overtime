function Mostrar(){
	var contador = 0;

	if (document.getElementById('r2').checked) {
		contador++
	}

	if (document.getElementById('r4').checked) {
		contador++
	}

	if (document.getElementById('r9').checked) {
		contador++
	}

	if (document.getElementById('r12').checked) {
		contador++
	}

	if (document.getElementById('r15').checked) {
		contador++
	}

	if (document.getElementById('r16').checked) {
		contador++
	}

	if (document.getElementById('r19').checked) {
		contador++
	}

	if (document.getElementById('r24').checked) {
		contador++
	}

	if (document.getElementById('r26').checked) {
		contador++
	}
    if(contador>=5){
        swal("Felicidades!! Pasaste", "Obtuviste "+contador+" de 9 puntos","success",
        {closeOnClickOutside: false}).then((value)=>{
            window. location = "https://overtime21.000webhostapp.com/pagina3.html";
        });
    }
    else{
        swal("No pudiste completar el nivel. Intentalo de nuevo", "Obtuviste "+contador+" de 9 puntos", "error");
    }

} 