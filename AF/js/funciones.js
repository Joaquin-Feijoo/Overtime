function Calcular(){
    let puntos=0;

    var p1 = document.getElementById('pregunta1');
    var p2 = document.getElementById('pregunta2');
    var p3 = document.getElementById('pregunta3');
    var p4 = document.getElementById('pregunta4');
    var p5 = document.getElementById('pregunta5');
    var p6 = document.getElementById('pregunta6');
    var p7 = document.getElementById('pregunta7');
    var p8 = document.getElementById('pregunta8');
    var p9 = document.getElementById('pregunta9');
    var p9v2 = document.getElementById('pregunta9v2');
    var p10 = document.getElementById('pregunta10');
    var p10v2 = document.getElementById('pregunta10v2');
    var p11 = document.getElementById('pregunta11');
    var p12 = document.getElementById('pregunta12');
    var p13 = document.getElementById('pregunta13');
    var p14 = document.getElementById('pregunta14');
    var p15 = document.getElementById('pregunta15');
    var p16 = document.getElementById('pregunta16');
    var p16v2 = document.getElementById('pregunta16v2');
    var p17 = document.getElementById('pregunta17');
    var p18 = document.getElementById('pregunta18');
    var p19 = document.getElementById('pregunta19');
    var p19v2 = document.getElementById('pregunta19v2');
    var p20 = document.getElementById('pregunta20');

    if (p1=='had')
    {
        puntos++;
    }
    if (p2=='finished')
    {
        puntos++;
    }
    if (p3=='liked')
    {
        puntos++;
    }
    if (p4=='broke')
    {
        puntos++;
    }
    if (p5=='met')
    {
        puntos++;
    }
    if (p6=='went')
    {
        puntos++;
    }
    if (p7=='watched')
    {
        puntos++;
    }
    if (p8=='didntgo')
    {
        puntos++;
    }
    if (p9=='did')
    {
        puntos++;
    }
    if (p9v2=='leave')
    {
        puntos++;
    }
    if (p10=='did')
    {
        puntos++;
    }
    if (p10v2=='hate')
    {
        puntos++;
    }
    if (p11=='read')
    {
        puntos++;
    }
    if (p12=='made')
    {
        puntos++;
    }
    if (p13=='played')
    {
        puntos++;
    }
    if (p14=='didntlisten')
    {
        puntos++;
    }
    if (p15=='got')
    {
        puntos++;
    }
    if (p16=='did')
    {
        puntos++;
    }
    if (p16v2=='visited')
    {
        puntos++;
    }
    if (p17=='drank')
    {
        puntos++;
    }
    if (p18=='didntenjoy')
    {
        puntos++;
    }
    if (p19=='did')
    {
        puntos++;
    }
    if (p19v2=='work')
    {
        puntos++;
    }
    if (p20=='saw')
    {
        puntos++;
    }
	if (puntos >= 16){
		alert("Has conseguido pasar el nivel!!!", + puntos + "/" + 20 , 'success');
}
else{
		alert( "No has conseguido pasar el nivel, vuelve a intentarlo!", +  puntos + "/" + 20, 'error' );
}
}