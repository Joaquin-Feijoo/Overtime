var personaje="";
var nombre="";
var pistas=0;

function Character(event){
	event.preventDefault();
	if(document.getElementById('usuario').value != ""){
		nombre=document.getElementById('usuario').value;
		personaje="photos/gato.jpg";
		if(document.getElementById('d2').checked){
			personaje="photos/perro.jpg";
		}
		sessionStorage.setItem("Nombre", nombre);
        sessionStorage.setItem("Personaje", personaje);
		console.log(sessionStorage.getItem("Nombre"), sessionStorage.getItem("Personaje"));
		location.replace("pagina1.html");
	}
	
	else swal("Ingrese un nombre","","error");
}

function RandomExercise1(){
	let exercises1 = [
		"https://overtime21.000webhostapp.com/AA/index.html", "https://overtime21.000webhostapp.com/AG/index.html", "https://overtime21.000webhostapp.com/AI/index.html", 
		];
	RandomExercise(exercises1);
}
function RandomExercise2(){
	let exercises2 = [
		"https://overtime21.000webhostapp.com/AD/index.html", "https://overtime21.000webhostapp.com/AT/index.html", "https://overtime21.000webhostapp.com/AQ/index.html", 
		];
	RandomExercise(exercises2);
}
function RandomExercise3(){
	let exercises3 = [
		"https://overtime21.000webhostapp.com/AV/index.html", "https://overtime21.000webhostapp.com/AW/index.html", 
		"https://overtime21.000webhostapp.com/AK/index.html",  "https://overtime21.000webhostapp.com/AO/index.html" 
		];
	RandomExercise(exercises3);
}
function RandomExercise4(){
	let exercises4 = [
		"https://overtime21.000webhostapp.com/AE/index.html", "https://overtime21.000webhostapp.com/AR/index.html", "https://overtime21.000webhostapp.com/AS/index.html", 
		];
	RandomExercise(exercises4);
}
function RandomExercise5(){
	let exercises5 = [
		"https://overtime21.000webhostapp.com/AC/index.html", "https://overtime21.000webhostapp.com/AL/index.html", "https://overtime21.000webhostapp.com/AX/index.html", 
		];
	RandomExercise(exercises5);
}
function RandomExercise(exercises){
	var i,random,aux;
	for (i = exercises.length; i; i--) {
        random = Math.floor(Math.random() * i);
        aux = exercises[i - 1];
        exercises[i - 1] = exercises[random];
        exercises[random] = aux;
    }
	location.replace(aux);
}












