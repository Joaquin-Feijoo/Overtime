function resultado() {
  var c = 0;
  if (document.getElementById("1.1").checked) {
    c++;
  }
  if (document.getElementById("2.1").checked) {
    c++;
  }
  if (document.getElementById("3.1").checked) {
    c++;
  }
  if (document.getElementById("3.01").checked) {
    c++;
  }
  if (document.getElementById("4.1").checked) {
    c++;
  }
  if (document.getElementById("4.01").checked) {
    c++;
  }
  if (document.getElementById("5.1").checked) {
    c++;
  }
  if (document.getElementById("5.01").checked) {
    c++;
  }
  if (document.getElementById("6.1").checked) {
    c++;
  }
  if (document.getElementById("7.1").checked) {
    c++;
  }
  if (document.getElementById("7.01").checked) {
    c++;
  }
  if (document.getElementById("8.1").checked) {
    c++;
  }
  if (document.getElementById("8.01").checked) {
    c++;
  }
  if (document.getElementById("9.1").checked) {
    c++;
  }
  if (document.getElementById("10.1").checked) {
    c++;
  }
  if (document.getElementById("11.1").checked) {
    c++;
  }
  if (document.getElementById("11.01").checked) {
    c++;
  }
  if (document.getElementById("12.1").checked) {
    c++;
  }
  if (document.getElementById("13.1").checked) {
    c++;
  }
  if (document.getElementById("13.01").checked) {
    c++;
  }
  if (document.getElementById("14.1").checked) {
    c++;
  }
  if (document.getElementById("14.01").checked) {
    c++;
  }
  if (document.getElementById("15.1").checked) {
    c++;
  }
  if (document.getElementById("15.01").checked) {
    c++;
  }

  if (c <= 16) {
    swal("Ups.. Segui intentando", "Tenes " + c + " de 24 puntos", "error");
  } else {
    swal("Felicidades!! Pasaste", "Tenes " + c + " de 24 puntos", "success", {
      closeOnClickOutside: false,
    }).then((value) => {
      window.location = "https://overtime21.000webhostapp.com/pagina2.html";
    });
  }
}
