// Requisicao AJAX

var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function() {

    var xhr = new XMLHttpRequest();

    // Abrindo a requisicao com o endereco desejado
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    // Ouvindo a resposta
    xhr.addEventListener("load", function() {

        if (xhr.status == 200) {
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.add("invisivel");
            // Texto string ==> Objeto JS
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                adicionaPacienteTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");
        }
        
    });
    // Enviando requisicao
    xhr.send();
});