function comprobar(){
	
	let total = 16;
	let points = 0;

	var optionValue = document.getElementById('field').value;
	var optionValue2 = document.getElementById('field2').value;
	var optionValue3 = document.getElementById('field3').value;
	var optionValue4 = document.getElementById('field4').value;
	var optionValue5 = document.getElementById('field5').value;
	var optionValue6 = document.getElementById('field6').value;
	var optionValue7 = document.getElementById('field7').value;
	var optionValue8 = document.getElementById('field8').value;
	var optionValue9 = document.getElementById('field9').value;
	var optionValue10 = document.getElementById('field10').value;
	var optionValue11 = document.getElementById('field11').value;
	var optionValue12 = document.getElementById('field12').value;
	var optionValue13 = document.getElementById('field13').value;
	var optionValue14 = document.getElementById('field14').value;
	var optionValue15 = document.getElementById('field15').value;
	var optionValue16 = document.getElementById('field16').value;




	if (optionValue == 1) {
	points++;	
	document.getElementById('field').classList.add('bkggreen');
	}
	else if (optionValue == 0) {
		document.getElementById('field').classList.add('bkgred');
	}

	if (optionValue2 == 1) {
	points++;	
	document.getElementById('field2').classList.add('bkggreen');
	}
	else if (optionValue2 == 0) {
		document.getElementById('field2').classList.add('bkgred');
	}

	if (optionValue3 == 1) {
	points++;	
	document.getElementById('field3').classList.add('bkggreen');
	}
	else if (optionValue3 == 0) {
		document.getElementById('field3').classList.add('bkgred');
	}

	if (optionValue4 == 1) {
	points++;	
	document.getElementById('field4').classList.add('bkggreen');
	}
	else if (optionValue4 == 0) {
		document.getElementById('field4').classList.add('bkgred');
	}

	if (optionValue5 == 1) {
	points++;	
	document.getElementById('field5').classList.add('bkggreen');
	}
	else if (optionValue5 == 0) {
		document.getElementById('field5').classList.add('bkgred');
	}

	if (optionValue6 == 1) {
	points++;	
	document.getElementById('field6').classList.add('bkggreen');
	}
	else if (optionValue6 == 0) {
		document.getElementById('field6').classList.add('bkgred');
	}

	if (optionValue7 == 1) {
	points++;	
	document.getElementById('field7').classList.add('bkggreen');
	}
	else if (optionValue7 == 0) {
		document.getElementById('field7').classList.add('bkgred');
	}

	if (optionValue8 == 1) {
	points++;	
	document.getElementById('field8').classList.add('bkggreen');
	}
	else if (optionValue8 == 0) {
		document.getElementById('field8').classList.add('bkgred');
	}

	if (optionValue9 == 1) {
	points++;	
	document.getElementById('field9').classList.add('bkggreen');
	}
	else if (optionValue9 == 0) {
		document.getElementById('field9').classList.add('bkgred');
	}

	if (optionValue10 == 1) {
	points++;	
	document.getElementById('field10').classList.add('bkggreen');
	}
	else if (optionValue10 == 0) {
		document.getElementById('field10').classList.add('bkgred');
	}

	if (optionValue11 == 1) {
	points++;	
	document.getElementById('field11').classList.add('bkggreen');
	}
	else if (optionValue11 == 0) {
		document.getElementById('field11').classList.add('bkgred');
	}

	if (optionValue12 == 1) {
	points++;	
	document.getElementById('field12').classList.add('bkggreen');
	}
	else if (optionValue12 == 0) {
		document.getElementById('field12').classList.add('bkgred');
	}

	if (optionValue13 == 1) {
	points++;	
	document.getElementById('field13').classList.add('bkggreen');
	}
	else if (optionValue13 == 0) {
		document.getElementById('field13').classList.add('bkgred');
	}

	if (optionValue14 == 1) {
	points++;	
	document.getElementById('field14').classList.add('bkggreen');
	}
	else if (optionValue14 == 0) {
		document.getElementById('field14').classList.add('bkgred');
	}

	if (optionValue15 == 1) {
	points++;	
	document.getElementById('field15').classList.add('bkggreen');
	}
	else if (optionValue15 == 0) {
		document.getElementById('field15').classList.add('bkgred');
	}

	if (optionValue16 == 1) {
	points++;	
	document.getElementById('field16').classList.add('bkggreen');
	}
	else if (optionValue16 == 0) {
		document.getElementById('field16').classList.add('bkgred');
	}

	
	

	if (points <11){
	 swal ("No has podido pasar el nivel!!!", points + "/" + total , 'error');
		
	}
	else
	{
        swal("Has Conseguido pasar el nivel!!!!", points + "/" + total, 'success',
        {closeOnClickOutside: false}).then((value)=>{
            window. location = "https://overtime21.000webhostapp.com/pagina2.html";
        });	
	}

}	


