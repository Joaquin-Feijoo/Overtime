function comprobarRespuesta(){
    let puntos=0;
    var select1=document.getElementById('select1').value;
    var select2=document.getElementById('select2').value;
    var select3=document.getElementById('select3').value;
    var select4=document.getElementById('select4').value;
    var select5=document.getElementById('select5').value;
    var select6=document.getElementById('select6').value;
    var select7=document.getElementById('select7').value;
    var select8=document.getElementById('select8').value;
    var select9=document.getElementById('select9').value; 
    var select31=document.getElementById('select31').value;
    var select32=document.getElementById('select32').value;
    var select33=document.getElementById('select33').value;
    var select34=document.getElementById('select34').value;
    var select35=document.getElementById('select35').value;
    var select36=document.getElementById('select36').value;
    var select37=document.getElementById('select37').value;
    var select38=document.getElementById('select38').value;
    var select39=document.getElementById('select39').value;
    var select40=document.getElementById('select40').value;
    var select41=document.getElementById('select41').value;
    var select42=document.getElementById('select42').value;
    var select43=document.getElementById('select43').value;
    var select44=document.getElementById('select44').value;
    var select45=document.getElementById('select45').value;
    var select46=document.getElementById('select46').value;
    var select47=document.getElementById('select47').value;
    var select48=document.getElementById('select48').value;
    var select49=document.getElementById('select49').value;
    var select50=document.getElementById('select50').value;
    var select51=document.getElementById('select51').value;
    var select52=document.getElementById('select52').value;
    var select53=document.getElementById('select53').value;
    var select54=document.getElementById('select54').value;
    var select55=document.getElementById('select55').value;
    var select56=document.getElementById('select56').value;
    var select57=document.getElementById('select57').value;
    var select58=document.getElementById('select58').value;
    var select59=document.getElementById('select59').value;

if(select1==1){
puntos++;
}
if(select2==1){
    puntos++;
}
if(select3==1){
    puntos++;
}
if(select4==1){
    puntos++;
}
if(select5==1){
    puntos++;
}
if(select6==1){
    puntos++;
}
if(select7==1){
    puntos++;
}
if(select8==1){
    puntos++;
}
if(select9==1){
    puntos++;
}
if(select31==1){
    puntos++;

}
if(select32==1){
    puntos++;

}
if(select33==1){
    puntos++;

}
if(select34==1){
    puntos++;

}
if(select35==1){
    puntos++;

}
if(select36==1){
    puntos++;

}
if(select37==1){
    puntos++;

}
if(select38==1){
    puntos++;

}
if(select39==1){
    puntos++;

}
if(select40==1){
    puntos++;

}
if(select41==1){
    puntos++;
}
if(select42==1){
    puntos++;
}
if(select43==1){
    puntos++;
}
if(select44==1){
    puntos++;

}
if(select45==1){
    puntos++;

}
if(select46==1){
    puntos++;

}
if(select47==1){
    puntos++;

}
if(select48==1){
    puntos++;

}
if(select49==1){
    puntos++;

}
if(select50==1){
    puntos++;

}
if(select51==1){
    puntos++;

}
if(select52==1){
    puntos++;

}
if(select53==1){
    puntos++;

}
if(select54==1){
    puntos++;

}
if(select55==1){
    puntos++;

}
if(select56==1){
    puntos++;

}
if(select57==1){
    puntos++;

}
if(select58==1){
    puntos++;

}
if(select59==1){
    puntos++;

}

if(document.getElementById('r1').checked){
    puntos++;
}
if(document.getElementById('r4').checked){
    puntos++;
}
if(document.getElementById('r8').checked){
    puntos++;
}
if(document.getElementById('r9').checked){
    puntos++;
}
if(document.getElementById('r12').checked){
    puntos++;
}
if(document.getElementById('r13').checked){
    puntos++;
}
if(document.getElementById('r15').checked){
    puntos++;
}
if(document.getElementById('r17').checked){
    puntos++;
}

    if(puntos<13)
    {
        swal ("Intentalo de nuevo","Obtuviste " + puntos + "/30.","error");
    }
    else{
        swal("Has conseguido pasar el nivel","Obtuviste " + puntos + "/30.","success",
        {closeOnClickOutside: false}).then((value)=>{
            window. location = "https://overtime21.000webhostapp.com/pagina5.html";
        }); 
    }
}