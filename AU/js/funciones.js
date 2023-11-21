		const Rex1 = [
		'are', 'You´re','You are not','You´re not','Are you?',
		'is', 'he´s', 'He is not', 'He´s not', 'Is he?', 
		'is', 'she´s', 'she is not', 'she´s not', 'Is she?',
		'is', 'it´s', 'It is not', 'It´s not', 'Is it?',
		'are', 'We´re', 'We are not', 'We´re not', 'Are we?', 
		'are', 'They´re', 'They are not', 'They´re not', 'are they?' 
		];

		const Rex2 = [
		'she', 'he', 'we', 'they', 'she', 'you', 'it', 'it', 'it', 'they',
		'she', 'it', 'they', 'they', 'it', 'it', 'she', 'it', 'they', 'it', 
		'they', 'it', 'they', 'it', 'he', 'they', 'it', 'they', 'they', 'he', 
		'he', 'it'
		];

		const Rex3 = [
		'am', 'are', 'are', 'is', 'are', 'is', 'is', 'is', 'am', 'are', 'are', 'is', 'are', 'is', 'is', 
		'are', 'is', 'am', 'are', 'is', 'is', 'are', 'are', 'is', 'are', 'is', 'am', 'are', 'are', 'is', 
		'is', 'are', 'is', 'am', 'are', 'is', 'is', 'are', 'are', 'is', 'are', 'is', 'are', 'am', 'is', 
		'are', 'is', 'are', 'is', 'is', 'are', 'are', 'is', 'are', 'am'
		];
	
	function CheckEx(P,EX,RTA){
    for(let i = 0; i < EX.length; i++){
        if(EX[i].options[EX[i].selectedIndex].text.toLowerCase() == RTA[i]){
            P++;
        }
    }
    return P;
}

	function SumaF(Suma){
	if (Suma<78){
		 swal("No has podido pasar el nivel!!!", Suma + "/117",'error');
		} else{
		 swal( "Has Conseguido pasar el nivel!!!!", Suma +"/117",'success');
		 	Suma=0;
		}

	}

	function Funcion(){
		let Suma=0;
		const Ex1 = document.getElementById('1div').querySelectorAll(".uk-select");
		const Ex2 = document.getElementById('2div').querySelectorAll(".uk-select");
		const Ex3 = document.getElementById('3div').querySelectorAll(".uk-select");
		Suma=CheckEx(Suma,Ex1,Rex1);
		Suma=CheckEx(Suma,Ex2,Rex2);
		Suma=CheckEx(Suma,Ex3,Rex3);
		SumaF(Suma);
	}