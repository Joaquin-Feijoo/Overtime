function resultado() {
    var cont = 0;
    if (document.getElementById("p1").value == "1") {
        cont++;
    }
    if (document.getElementById("p2").value == "1") {
        cont++;
    }
    if (document.getElementById("p3").value == "1") {
        cont++;
    }
    if (document.getElementById("p4").value == "1") {
        cont++;
    }
    if (document.getElementById("p5").value == "1") {
        cont++;
    }
    if (document.getElementById("p6").value == "1") {
        cont++;
    }
    if (document.getElementById("p7").value == "1") {
        cont++;
    }
    if (document.getElementById("p8").value == "1") {
        cont++;
    }
    if (document.getElementById("p9").value == "1") {
        cont++;
    }
    if (document.getElementById("p10").value == "1") {
        cont++;
    }
    if (document.getElementById("p11").value == "1") {
        cont++;
    }
    if (document.getElementById("p12").value == "1") {
        cont++;
    }
    if (document.getElementById("p13").value == "1") {
        cont++;
    }
    if (document.getElementById("p14").value == "1") {
        cont++;
    }
    if (document.getElementById("p15").value == "1") {
        cont++;
    }
    if (document.getElementById("p16").value == "1") {
        cont++;
    }
    if (document.getElementById("p17").value == "1") {
        cont++;
    }
    if (document.getElementById("p18").value == "1") {
        cont++;
    }
    if (document.getElementById("p19").value == "1") {
        cont++;
    }
    if (document.getElementById("p20").value == "1") {
        cont++;
    }

    if (cont >= 14) {
        swal("Felicidades, Has podido pasar el nivel!", "Tenes " + cont + " de 20!!", 'success')
    } else {
        swal("Lastima, no has podido pasar el nivel", "Tenes " + cont + " de 20!!", 'error')
    }
}