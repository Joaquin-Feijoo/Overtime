function resultado(){
var points=0;
var q1=document.getElementById('pregunta1').value;
var q2=document.getElementById('pregunta2').value;
var q3=document.getElementById('pregunta3').value;
var q4=document.getElementById('pregunta4').value;
var q5=document.getElementById('pregunta5').value;
var q6=document.getElementById('pregunta6').value;
var q7=document.getElementById('pregunta7').value;
var q8=document.getElementById('pregunta8').value;
var q9=document.getElementById('pregunta9').value;
var q10=document.getElementById('pregunta10').value;
var q11=document.getElementById('pregunta11').value;
var q12=document.getElementById('pregunta12').value;
var q13=document.getElementById('pregunta13').value;
var q14=document.getElementById('pregunta14').value;
var q15=document.getElementById('pregunta15').value;
var q16=document.getElementById('pregunta16').value;
var q17=document.getElementById('pregunta17').value;
var q18=document.getElementById('pregunta18').value;
var q19=document.getElementById('pregunta19').value;
var q20=document.getElementById('pregunta20').value;


	if (q1 == 1) {
	points++; 
	document.getElementById('pregunta1').classList.add('green-f');
	}
	 else if (q1 == 0 )  {
	document.getElementById('pregunta1').classList.add('rojo-f');
	}

	if (q2 == 1) {
	points++; 
	document.getElementById('pregunta2').classList.add('green-f');
	}
	 else if (q2 == 0 ) {
	document.getElementById('pregunta2').classList.add('rojo-f');
	}

	if (q3 == 1) {
	points++; 
	document.getElementById('pregunta3').classList.add('green-f');
	}
	 else if (q3 == 0 ) {
	document.getElementById('pregunta3').classList.add('rojo-f');
	}

	if (q4 == 1) {
	points++; 
	document.getElementById('pregunta4').classList.add('green-f');
	}
	 else if (q4 == 0 ) {
	document.getElementById('pregunta4').classList.add('rojo-f');
	}

	if (q5 == 1) {
	points++; 
	document.getElementById('pregunta5').classList.add('green-f');
	}
	 else if (q5 == 0 )  {
	document.getElementById('pregunta5').classList.add('rojo-f');
	}

	if (q6 == 1) {
	points++; 
	document.getElementById('pregunta6').classList.add('green-f');
	}
	 else if (q6 == 0 )  {
	document.getElementById('pregunta6').classList.add('rojo-f');
	}

	if (q7 == 1) {
	points++; 
	document.getElementById('pregunta7').classList.add('green-f');
	}
	 else if (q7 == 0 )  {
	document.getElementById('pregunta7').classList.add('rojo-f');
	}

	if (q8 == 1) {
	points++; 
	document.getElementById('pregunta8').classList.add('green-f');
	}
	 else if (q8 == 0 )  {
	document.getElementById('pregunta8').classList.add('rojo-f');
	}

	if (q9 == 1) {
	points++; 
	document.getElementById('pregunta9').classList.add('green-f');
	}
	 else if (q9 == 0 ) {
	document.getElementById('pregunta9').classList.add('rojo-f');
	}

	if (q10 == 1) {
	points++; 
	document.getElementById('pregunta10').classList.add('green-f');
	}
	 else if (q10 == 0 ) {
	document.getElementById('pregunta10').classList.add('rojo-f');
	}

	if (q11 == 1) {
	points++; 
	document.getElementById('pregunta11').classList.add('green-f');
	}
	 else if (q11 == 0 )  {
	document.getElementById('pregunta11').classList.add('rojo-f');
	}

	if (q12 == 1) {
	points++; 
	document.getElementById('pregunta12').classList.add('green-f');
	}
	 else if (q12 == 0 ) {
	document.getElementById('pregunta12').classList.add('rojo-f');
	}

	if (q13 == 1) {
	points++; 
	document.getElementById('pregunta13').classList.add('green-f');
	}
	 else if (q13 == 0 )  {
	document.getElementById('pregunta13').classList.add('rojo-f');
	}

	if (q14 == 1) {
	points++; 
	document.getElementById('pregunta14').classList.add('green-f');
	}
	 else if (q14 == 0 )  {
	document.getElementById('pregunta14').classList.add('rojo-f');
	}

	if (q15 == 1) {
	points++; 
	document.getElementById('pregunta15').classList.add('green-f');
	}
	 else if (q15 == 0 )  {
	document.getElementById('pregunta15').classList.add('rojo-f');
	}

	if (q16 == 1) {
	points++; 
	document.getElementById('pregunta16').classList.add('green-f');
	}
	 else if (q16 == 0 )  {
	document.getElementById('pregunta16').classList.add('rojo-f');
	}

	if (q17 == 1) {
	points++; 
	document.getElementById('pregunta17').classList.add('green-f');
	}
	 else if (q17 == 0 ) {
	document.getElementById('pregunta17').classList.add('rojo-f');
	}

	if (q18 == 1) {
	points++; 
	document.getElementById('pregunta18').classList.add('green-f');
	}
	 else if (q18 == 0 )  {
	document.getElementById('pregunta18').classList.add('rojo-f');
	}

	if (q19 == 1) {
	points++; 
	document.getElementById('pregunta19').classList.add('green-f');
	}
	 else if (q19 == 0 )  {
	document.getElementById('pregunta19').classList.add('rojo-f');
	}

	if (q20 == 1) {
	points++; 
	document.getElementById('pregunta20').classList.add('green-f');
	}
	 else if (q20 == 0 )  {
	 document.getElementById('pregunta20').classList.add('rojo-f');
	}

	if (points <= 17) 
	{
		swal("Fallaste, pero no te rindas!!!","Tenes "+points+" de 20 puntos","error");
	}
	else
	 {
		swal("Aprobaste, Felicidades!!!", "Tenes "+points+" de 20 puntos","success",
        {closeOnClickOutside: false}).then((value)=>{
            window. location = "https://overtime21.000webhostapp.com/pagina4.html";
        }); 
	}
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       