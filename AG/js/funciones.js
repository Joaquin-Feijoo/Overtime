function CalcularPuntaje(){
    let puntos=0;
    var p1 = document.getElementById('select1');
    var px1 = p1.options[p1.selectedIndex].text;
    var p2 = document.getElementById('select2');
    var px2 = p2.options[p2.selectedIndex].text;
    var p3 = document.getElementById('select3');
    var px3 = p3.options[p3.selectedIndex].text;
    var p4 = document.getElementById('select4');
    var px4 = p4.options[p4.selectedIndex].text;
    var p5 = document.getElementById('select5');
    var px5 = p5.options[p5.selectedIndex].text;
    var p6 = document.getElementById('select6');
    var px6 = p6.options[p6.selectedIndex].text;
    var p7 = document.getElementById('select7');
    var px7 = p7.options[p7.selectedIndex].text;
    var p8 = document.getElementById('select8');
    var px8 = p8.options[p8.selectedIndex].text;
    var p9 = document.getElementById('select9');
    var px9 = p9.options[p9.selectedIndex].text;
    var p10 = document.getElementById('select10');
    var px10 = p10.options[p10.selectedIndex].text;
    var p11 = document.getElementById('select11');
    var px11 = p11.options[p11.selectedIndex].text;
    var p12 = document.getElementById('select12');
    var px12 = p12.options[p12.selectedIndex].text;

    if (px1=='in')
    {
        puntos++;
    }
    if (px2=='between')
    {
        puntos++;
    }
    if (px3=='under')
    {
        puntos++;
    }
    if (px4=='behind')
    {
        puntos++;
    }
    if (px5=='next to')
    {
        puntos++;
    }
    if (px6=='on')
    {
        puntos++;
    }
    if (px7=='in front of')
    {
        puntos++;
    }
    if (px8=='under')
    {
        puntos++;
    }
    if (px9=='between')
    {
        puntos++;
    }
    if (px10=='on')
    {
        puntos++;
    }
    if (px11=='over')
    {
        puntos++;
    }
    if (px12=='in')
    {
        puntos++;
    }

    // document.write(puntos);
    //alert ("usted tiene " + puntos + "/12 respuestas correctas" );
    if (puntos < 7){
        swal ("No has podido pasar el nivel, has conseguido ", + puntos + "/12 puntos!!! Vuelve a intentarlo", 'error');
	}
	else
	{
        swal("Has Conseguido pasar el nivel, has conseguido ", + puntos + "/12 puntos!!! Suerte en el siguiente nivel", 'success',{closeOnClickOutside: false}).then((value)=>{
            window. location = "https://overtime21.000webhostapp.com/pagina2.html";
        });
	}
}