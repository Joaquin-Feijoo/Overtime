const palabraN = [
    'palabra-0', 'palabra-1', 'palabra-2', 'palabra-3',
    'palabra-4', 'palabra-5', 'palabra-6', 'palabra-7', 
    'palabra-8', 'palabra-9', 'palabra-10', 'palabra-11',
    'palabra-12', 'palabra-13', 'palabra-14', 'palabra-15',
];//16
const palabras = [
    'boring', 'rainy', 'time', 'do', 
    'around', 'you', 'happens', 'car',
    'fast', 'too', 'change', 'view',
    'feel', 'lonely', 'nothing', 'wonder'
]
const RtaEx2 = [
    '1 - d', '2 - c', '3 - e', 
    '4 - a', '5 - f', '6 - b'
]//6
const RtaEx3 = [
    'here', 'power', 'out', 'shower', 
    'heavy', 'tired', 'bed', 'nothing',
    'good', 'desert', 'toy', 'happen'
]//12
const RtaEx4 = [
    'heavy', 'good', 'up', 'far',
    'boring', 'out', 'fast', 'rainy'
]//8
const RtaEx5 = [
    false, true, 
    true, false,
    true, false,
    false, true,
    true,false,
    false, true,
    true, false,
    true, false
]//8
let contador=16, Total=50, Puntos=0;
var n, a;
const piezas = document.getElementById('piezas');
const Ex1Placeholder = document.querySelectorAll(".placeholder");
const Ex2 = document.getElementById('ContenedorEx2').querySelectorAll(".uk-card");
const Ex3 = document.getElementById('CardEx3').querySelectorAll(".uk-select");
const Ex4 = document.getElementById('TableEx4').querySelectorAll(".uk-input");
const Ex5 = document.getElementById('TableEx5').querySelectorAll(".uk-radio");
function CreateEx(){
    while (palabraN.length) {
        const index = Math.floor(Math.random() * palabraN.length);
        const div = document.createElement('div');
        div.classList.add('uk-text-center','uk-box-shadow-hover-large','height','uk-padding-remove', 'palabra');  
        const numero = palabraN[index].split('-')[1];
        div.id = palabras[numero];
        palabraN.splice(index, 1);
        div.appendChild(document.createTextNode(palabras[numero]));
        piezas.appendChild(div);
    }
}
function Disable(){
    for(let i = 0; i < Ex1Placeholder.length; i++){
        Ex1Placeholder[i].addEventListener("added", function() {
            Ex1Placeholder[i].classList.add("phBB","uk-box-shadow-medium");
            Ex1Placeholder[i].classList.remove("phAB");
            Ex1Placeholder[i].removeAttribute("uk-sortable");
            contador--;
            if (contador==0) {
                document.getElementById('panelB').remove();
                document.getElementById('panelA').classList.remove('uk-child-width-1-2@m');
                document.getElementById('panelA').classList.add('uk-child-width-1-1@m');
            }
        });
    }
}
function evalua(N){
    n = N;
}
function evalua2(N){
    a = N;
}
function proceso(){
    var idn = 'i_'+n;
    var ida = 'i_'+a;
    document.getElementById(idn).disabled = true;
    document.getElementById(ida).disabled = true;
    document.getElementById('Ex2card'+n).classList.remove("uk-hidden");
    document.getElementById('Ex2card'+n).appendChild(document.createTextNode(n+' - '+a));
    n = undefined;
    document.getElementById('pry').reset();
}
function CheckEx1(P){
    for(let i = 0; i < Ex1Placeholder.length; i++){
        if (Ex1Placeholder[i].innerHTML != ""){
            if(Ex1Placeholder[i].firstChild.innerText == palabras[i]){
                P++;
            }
        }
    }
    return P;
}
function CheckEx2(P){
    for(let i = 0; i < Ex2.length; i++){
        if(Ex2[i].innerText == RtaEx2[i]){
            P++;
        }
    }
    return P;
}
function CheckEx3(P){
    for(let i = 0; i < Ex3.length; i++){
        if(Ex3[i].options[Ex3[i].selectedIndex].text == RtaEx3[i]){
            P++;
        }
    }
    return P;
}
function CheckEx4(P){
    for(let i = 0; i < Ex4.length; i++){
        if(Ex4[i].value.toLowerCase() == RtaEx4[i]){
             P++;
        }
    }
    return P;
}
function CheckEx5(P){
    for(let i = 0; i < Ex5.length; i++){
        if(Ex5[i].checked){
            if(Ex5[i].checked == RtaEx5[i]){
                P++;
            }
        }
    }
    return P;
}
function CompleteFunction(){
    Puntos= CheckEx1(Puntos);
    Puntos= CheckEx2(Puntos);
    Puntos= CheckEx3(Puntos);
    Puntos= CheckEx4(Puntos);
    Puntos= CheckEx5(Puntos);
    if((Puntos/Total)*100 > 70){
        swal("Completaste el nivel. ¡¡Felicitaciones!!", Puntos+"/"+Total, "success",
        {closeOnClickOutside: false}).then((value)=>{
            window. location = "https://overtime21.000webhostapp.com/pagina6.html";
        });        
    }else {
        swal("No pudiste completar el nivel. Intentalo de nuevo", Puntos+"/"+Total, "error",
        {closeOnClickOutside: false}).then((value) => {
            window. location = "./index.html";
          });
        }
}