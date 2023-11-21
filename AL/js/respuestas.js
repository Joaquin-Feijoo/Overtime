
var resultado=0;
var contador1=0;
var contador2=0;
var contador3=0;

	function ejercicios(){
	var o1=document.getElementById('opcion1').selectedIndex;
	var o2=document.getElementById('opcion2').selectedIndex;
	var o3=document.getElementById('opcion3').selectedIndex;
	var o4=document.getElementById('opcion4').selectedIndex;
	var o5=document.getElementById('opcion5').selectedIndex;
	var o6=document.getElementById('opcion6').selectedIndex;
	var o7=document.getElementById('opcion7').selectedIndex;
	var o8=document.getElementById('opcion8').selectedIndex;
		var ej21=document.getElementById('ej21').selectedIndex;
		var ej22=document.getElementById('ej22').selectedIndex;
		var ej23=document.getElementById('ej23').selectedIndex;
		var ej24=document.getElementById('ej24').selectedIndex;
		var ej25=document.getElementById('ej25').selectedIndex;
		var ej26=document.getElementById('ej26').selectedIndex;
		var ej27=document.getElementById('ej27').selectedIndex;
		var ej28=document.getElementById('ej28').selectedIndex;
			var op1=document.getElementById('op1').selectedIndex;
			var op2=document.getElementById('op2').selectedIndex;
			var op3=document.getElementById('op3').selectedIndex;
			var op4=document.getElementById('op4').selectedIndex;
			var op5=document.getElementById('op5').selectedIndex;
			var op6=document.getElementById('op6').selectedIndex;
			var op7=document.getElementById('op7').selectedIndex;
			var op8=document.getElementById('op8').selectedIndex;

	if(o1==1){
		contador1++;
 	}

 		if(o2==2){
			contador1++;
 		}

	 		if(o3==1){
				contador1++;
	 		}

		 		if(o4==2){
					contador1++;
		 		}

			 		if(o5==2){
						contador1++;
			 		}

				 		if(o6==1){
							contador1++;
				 		}

					 		if(o7==1){
								contador1++;
					 		}

						 		if(o8==2){
									contador1++;
						 		}

						 			
 	if(ej21==2){
		contador2++;
 	}

 		if(ej22==4){
			contador2++;
 		}

	 		if(ej23==3){
				contador2++;
	 		}

		 		if(ej24==1){
					contador2++;
		 		}

			 		if(ej25==2){
						contador2++;
			 		}

				 		if(ej26==1){
							contador2++;
				 		}

					 		if(ej27==4){
								contador2++;
					 		}


						 		if(ej28==3){
									contador2++;
						 		}

	if(op1==2){
		contador3++;
 	}

 		if(op2==1){
			contador3++;
 		}

	 		if(op3==1){
				contador3++;
	 		}

		 		if(op4==2){
					contador3++;
		 		}

			 		if(op5==2){
						contador3++;
			 		}

				 		if(op6==1){
							contador3++;
				 		}

					 		if(op7==2){
								contador3++;
					 		}

						 		if(op8==1){
									contador3++;
						 		}
			

		
							return Resultado();
						

	}	 				


function Resultado(){
	resultado=contador1+contador2+contador3;
if (resultado<16){
	 swal("No has podido pasar el nivel!!!", resultado + "/24",'error');
		resultado=0;
		contador1=0;
		contador2=0;
		contador3=0;
	}

	else{
        swal("Has Conseguido pasar el nivel!!!!", resultado +"/24",'success',
        {closeOnClickOutside: false}).then((value)=>{
            window. location = "https://overtime21.000webhostapp.com/pagina6.html";
        });	 	
        resultado=0;
		contador1=0;
		contador2=0;
		contador3=0;
	}

	
}