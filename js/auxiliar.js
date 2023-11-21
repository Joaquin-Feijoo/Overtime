/*MAP POINTS*/
function bigImg(x) {
  x.style.height = "25px";
  x.style.width = "25px";
}
function normalImg(x) {
  x.style.height = "20px";
  x.style.width = "20px";
}
/*BASIC ANIMATIONS*/
function Mostrar(t1,t2,t3){
  $("#uno").hide().delay(t1).show( "slide", { direction: "left"  }, 1500 );
  $("#dos").hide().delay(t2).show( "slide", { direction: "left"  }, 1500 );
  $("#tres").hide().delay(t3).show( "slide", { direction: "left"  }, 1500 );
}
function MostrarB (id, d, t){
  $(id).hide().delay(d).fadeIn(t);
}
function MostrarC (id,t1, t2){
  $(id).hide().delay(t1).show( "slide", { direction: "up"  }, t2);
}
/*BYE MAP HI STORY*/
function AHORA(func){
  $("#CompleteMap").fadeOut("slow");
  $("#p1").removeClass("uk-hidden");
  MostrarC("#p1",0,"slow");
  if(func == true){
    MostrarC("#div2",600, 1500);
  }else MostrarB("#div2",600,1500);
  MostrarC("#div-ab-1",2000, 1000);
  $("html, body").delay(2400).animate({ scrollTop: "350px" });
  MostrarB("#uno-p1",3000, 1500);
  MostrarB("#dos-p1",4000, 1500);
  MostrarB("#tres-p1",5000, 1500);
  MostrarB("#boton-p1",6000,"slow");
  
}
/*MARKERS*/
function describir(titulo, texto1, texto2,img, flag){
  MostrarC("#div-ab",50,"slow");
  $("#uno-1").text(titulo);
  $("#dos").text(texto1);
  $("#tres").text(texto2);
  $("#imgA").removeAttr('src');
  $("#imgA").attr('src', img);
  MostrarB("#imgA", 1250, 1500);
  MostrarB("#uno",2500, 1500);
  MostrarB("#dos",3000, 1500);
  MostrarB("#tres",3500, 1500);
  MostrarB("#boton",5000,"slow");
  SetGame(flag);
}
function SetGame(flag){
  if(flag==true){
    $("#boton").prop('disabled', false);
  }
  else $("#boton").prop('disabled', true);
}
/*Inner text exchange*/
function a(t1,t2,t3){
  $("#boton-p1").hide();
  $("#uno-p1").delay(300).fadeOut(1000, function() {
      $(this).html(t1);
  });
  $("#dos-p1").delay(300).fadeOut(1000, function() {
      $(this).html(t2);
  });
  $("#tres-p1").delay(300).fadeOut(1000, function() {
      $(this).html(t3);
  });
  $("#botonB-p1").removeAttr('hidden');
  $("#div-img").removeAttr('hidden');
  $("#imgA-p1").removeAttr('src');
  $("#imgA-p1").attr('src', sessionStorage.getItem("Personaje"));
  $("#imgA-p1").removeAttr('hidden');
  MostrarB("#imgA-p1",350, 1500);
  MostrarB("#uno-p1",1600, 1500);
  MostrarB("#dos-p1",3000, 1500);
  MostrarB("#tres-p1",4000, 1500);
  $("#boton-p1").remove();
  $("#boton-div").remove();
  MostrarB("#botonB-p1",4500, "slow");
}
function final(t1, t2, t3,t4){
  var nombre=sessionStorage.getItem("Nombre");
  $("#botonB-p1").hide();
  $("#uno-p1").delay(300).fadeOut(1000, function() {
    $(this).html(t1+ nombre + t2);
  });
  $("#dos-p1").delay(300).fadeOut(1000, function() {
    $(this).html(t3);
  });
  $("#tres-p1").delay(300).fadeOut(1000, function() {
    $(this).html(t4);
  });
  $("#imgA-p1").fadeOut(750);
  $("#imgA-p1").attr('hidden',true);
  $("#div-img").attr('hidden',true);
  $("#div-img2").removeAttr('hidden');
  $("#imgA-p2").removeAttr('hidden');
  MostrarB("#imgA-p2",350, 1500);
  MostrarB("#uno-p1",1600, 1500);
  MostrarB("#dos-p1",3000, 1500);
  MostrarB("#tres-p1",4000, 1500);
  $("#botonB-p1").remove();
  $("#boton-div2").remove();
  $("#botonC-p1").removeAttr('hidden');
  MostrarB("#botonC-p1",4500, "slow");
}
function bajar() {
  $("html, body").animate({ scrollTop: "400px" });
}