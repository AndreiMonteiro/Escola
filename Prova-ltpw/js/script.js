function calc() {


   //entrada
    horario = document.form.horario.value;

    //processamento
    if(horario == "Econômica") {
        valor = 4500;
    
    }
    else if(horario == "Executiva") {
        valor = 7170;
    }
    else{
        valor = 13800;
    }
   
     //saida
     document.getElementById("total").value = valor;

     document.getElementById("filme").checked = false;
     document.getElementById("livro").checked = false;
     document.getElementById("jogo").checked = false;
}   
function opcionais(valor,marcado) {
    //entrada
    total = document.getElementById('total').value;

    //processamento

    if (marcado) {
        total = Number(total) + Number(valor)

    }
    else{
        total = Number(total) - Number(valor);
    }

    //saida
    document.getElementById('total').value = total;
}
function trocaTema() {
    //entrada
    tema = document.getElementById("tema").value;
    //processamento
    if (tema == "1") {
        titulo = "Barcelona";
        newFundo = "img/Barcelona-1.jpg";
        newFoto = "";
    }
    else if (tema == "2") {
        titulo = "Madrid";
        newFundo = "img/madrid-1.jpg";
        newFoto = "";
    }
    else if (tema == "3") {
        titulo = "Sevilha"
        newFundo = "img/Sevilha.jpg"
        newFoto = ""
    }
    else if (tema == "4") {
        titulo = "Granada"
        newFundo = "img/Granada.jpg"
        newFoto = ""
    }
    else {
        titulo = "Voos Espanhóis"
        newFundo = "img/ceu.jpg"
        newFoto = ""
    }
    //saida
    document.getElementById("titulo").value = titulo
    document.body.style.backgroundImage = "url(" + newFundo + ")";
    document.getElementById("foto").src = newFoto;
}