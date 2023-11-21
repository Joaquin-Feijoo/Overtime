

function calificar() {
  
  var a = document.getElementById('a').value;
  var b = document.getElementById('b').value;
  var c = document.getElementById('c').value;
  var d = document.getElementById('d').value;
  var e = document.getElementById('e').value;
  var f = document.getElementById('f').value;
  var g = document.getElementById('g').value;
  var h = document.getElementById('h').value;
  var i = document.getElementById('i').value;
  var j = document.getElementById('j').value;
  var k = document.getElementById('k').value;
  var l = document.getElementById('l').value;
  var punto= 0;
  
  if (a == '1'){
      punto++;
  }
  if (b == '1'){
      punto++;
  }
  if (c == '1'){
      punto++;
  }
  if (d == '1'){
      punto++;
  }
  if (e == '1'){
      punto++;
  }
  if (f == '1'){
      punto++;
  }
  if (g == '1'){
      punto++;
  }
  if (h == '1'){
      punto++;
  }
  if (i == '1'){
      punto++;
  }
  if (j == '1'){
      punto++;
  }
  if (k == '1'){
      punto++;
  }
  if (l == '1'){
      punto++;
  }
    if (punto < 8) 
	{
		swal("Fallaste, pero no te rindas!!!","Tenes "+punto+" de 12 puntos","error");
	}
	else
	{
		swal("Aprobaste, Felicidades!!!", "Tenes "+punto+" de 12 puntos","success",
        {closeOnClickOutside: false}).then((value)=>{
            window. location = "https://overtime21.000webhostapp.com/pagina3.html";
        });
	}
}

