function calcular(params) {
  var cont = 0;
  if (document.getElementById("r1").checked) {
    cont++;
  }
  if (document.getElementById("r4").checked) {
    cont++;
  }
  if (document.getElementById("r5").checked) {
    cont++;
  }
  if (document.getElementById("r7").checked) {
    cont++;
  }
  if (document.getElementById("r9").checked) {
    cont++;
  }
  if (document.getElementById("r12").checked) {
    cont++;
  }
  if (document.getElementById("r14").checked) {
    cont++;
  }
  if (document.getElementById("r16").checked) {
    cont++;
  }
  if (document.getElementById("r18").checked) {
    cont++;
  }
  if (document.getElementById("r20").checked) {
    cont++;
  }

  if (cont < 7) {
    swal ("No has podido pasar el nivel!!!", cont + "/10" , 'error');
     
   } else 	{
    swal ( "Has Conseguido pasar el nivel!!!!", cont+"/10" , 'success' )
   }
}

function mostrar() {
  var cont = 0;
  if (document.getElementById("e1").value == "r3") {
    cont++;
  }
  if (document.getElementById("e2").value == "r3") {
    cont++;
  }
  if (document.getElementById("e3").value == "r1") {
    cont++;
  }
  if (document.getElementById("e4").value == "r1") {
    cont++;
  }
  if (document.getElementById("e5").value == "r1") {
    cont++;
  }
  if (document.getElementById("e6").value == "r3") {
    cont++;
  }
  if (document.getElementById("e7").value == "r3") {
    cont++;
  }
  if (document.getElementById("e8").value == "r3") {
    cont++;
  }
  if (document.getElementById("e9").value == "r3") {
    cont++;
  }
  if (document.getElementById("e10").value == "r3") {
    cont++;
  }
  if (document.getElementById("e11").value == "r4") {
    cont++;
  }
  if (document.getElementById("e12").value == "r2") {
    cont++;
  }


  //alert("su nota en este ejercicio es un:" + msg);
  if (cont < 7) {
    swal ("No has podido pasar el nivel!!!", cont + "/12" , 'error');
     
   } else {
    swal ("Has podido pasar el nivel!!!", cont + "/12"  , "success");
     
   }
}

function final() {
  var cont = 0;
  if (document.getElementById("e1").value == "r3") {
    cont++;
  }
  if (document.getElementById("e2").value == "r3") {
    cont++;
  }
  if (document.getElementById("e3").value == "r1") {
    cont++;
  }
  if (document.getElementById("e4").value == "r1") {
    cont++;
  }
  if (document.getElementById("e5").value == "r1") {
    cont++;
  }
  if (document.getElementById("e6").value == "r3") {
    cont++;
  }
  if (document.getElementById("e7").value == "r3") {
    cont++;
  }
  if (document.getElementById("e8").value == "r3") {
    cont++;
  }
  if (document.getElementById("e9").value == "r3") {
    cont++;
  }
  if (document.getElementById("e10").value == "r3") {
    cont++;
  }


  //alert("su nota en este ejercicio es un:" + msg);
  if(cont>=7){
    swal("Completaste el nivel. ¡¡Felicitaciones!!", cont+"/10", "success",
    {closeOnClickOutside: false}).then((value)=>{
        window. location = "https://overtime21.000webhostapp.com/pagina6.html";
    });        
}else {
  swal ("No has podido pasar el nivel!!!", cont + "/10", 'error');
   
 }
}