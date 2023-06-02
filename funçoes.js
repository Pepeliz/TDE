document.addEventListener('DOMContentLoaded', function () {

});

function materia(indice) {
    var tituloeBotoes = document.querySelector(".tituloeBotoes");
    var tituloMaterias = document.querySelector(".tituloMaterias");
    var botaoVolta = document.getElementById("botaoVolta");
    var materias = [
        document.querySelector(".experiencia"),
        document.querySelector(".filosofia"),
        document.querySelector(".cyberfisicos"),
        document.querySelector(".algoritmos"),
        document.querySelector(".logica")
    ];

    tituloeBotoes.style.display = "none";
    tituloMaterias.style.display = "block";
    botaoVolta.style.display = "block";

    for (var i = 0; i < materias.length; i++) {
        if (i === indice) {
            materias[i].style.display = "block";
        } else {
            materias[i].style.display = "none";
        }
    }
}

function voltar() {
    var tituloeBotoes = document.querySelector(".tituloeBotoes");
    var tituloMaterias = document.querySelector(".tituloMaterias");
    var botaoVolta = document.getElementById("botaoVolta");

    tituloeBotoes.style.display = "block";
    tituloMaterias.style.display = "none";
    botaoVolta.style.display = "none";

}