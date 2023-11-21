function Rodrigo(){
    var c = 0;
	var q1=document.getElementById('r1').value;
	var q2=document.getElementById('r2').value;
	var q3=document.getElementById('r3').value;
	var q4=document.getElementById('r4').value;
	var q5=document.getElementById('r5').value;
	var q6=document.getElementById('r6').value;
	var q7=document.getElementById('r7').value;
	var q8=document.getElementById('r8').value;
	var q9=document.getElementById('r9').value;
	var q10=document.getElementById('r10').value;
	var q11=document.getElementById('r11').value;
	var q12=document.getElementById('r12').value;
	var q13=document.getElementById('r13').value;
	var q14=document.getElementById('r14').value;
	var q15=document.getElementById('r15').value;
	var q16=document.getElementById('r16').value;
	var q17=document.getElementById('r17').value;
	var q18=document.getElementById('r18').value;
	var q19=document.getElementById('r19').value;
	var q20=document.getElementById('r20').value;
	var q21=document.getElementById('r21').value;
	var q22=document.getElementById('r22').value;
	var q23=document.getElementById('r23').value;
	var q24=document.getElementById('r24').value;
	var q25=document.getElementById('r25').value;
	var q26=document.getElementById('r26').value;
	var q27=document.getElementById('r27').value;
	var q28=document.getElementById('r28').value;
	var q29=document.getElementById('r29').value;
	var q30=document.getElementById('r30').value;

    if(q1=="1"){
		c++;
	}
	else{
		var m1 = q1;
	}
    if(q2=="1"){
		c++;
	}
    if(q3=="1"){
		c++;
	}
    if(q4=="1"){
		c++;
	}
    if(q5=="1"){
		c++;
	}
    if(q6=="1"){
		c++;
	}
    if(q7=="1"){
		c++;
	}
    if(q8=="1"){
		c++;
	}
    if(q9=="1"){
		c++;
	}
    if(q10=="1"){
		c++;
	}
    if(q11=="1"){
		c++;
	}
    if(q12=="1"){
		c++;
	}
    if(q13=="1"){
		c++;
	}
    if(q14=="1"){
		c++;
	}
    if(q15=="1"){
		c++;
	}
    if(q16=="1"){
		c++;
	}
    if(q17=="1"){
		c++;
	}
    if(q18=="1"){
		c++;
	}
    if(q19=="1"){
		c++;
	}
    if(q20=="1"){
		c++;
	}
    if(q21=="1"){
		c++;
	}
    if(q22=="1"){
		c++;
	}
    if(q23=="1"){
		c++;
	}
    if(q24=="1"){
		c++;
	}
    if(q25=="1"){
		c++;
	}
    if(q26=="1"){
		c++;
	}
    if(q27=="1"){
		c++;
	}
    if(q28=="1"){
		c++;
	}
    if(q29=="1"){
		c++;
	}
    if(q30=="1"){
		c++;
	}
	if (c >= 24){
		swal("Has conseguido pasar el nivel!!!", c + "/" + 30 , 'success',
        {closeOnClickOutside: false}).then((value)=>{
            window. location = "https://overtime21.000webhostapp.com/pagina3.html";
        });
	   }
	   else
	   {
		swal ( "No has Conseguido pasar el nivel!!!!", + c + "/" + 30, 'error' )
	   }
}