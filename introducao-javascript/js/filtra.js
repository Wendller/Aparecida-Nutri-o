var filtro = document.querySelector("#filtrar-tabela");

filtro.addEventListener("input", function() {
    console.log(this.value);
    // Pegando os pacientes da tabela
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {

        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            // Criando expressao de verificacao
            var expressao = new RegExp(this.value, "i") // Case insensitive
            // Comparando com o nome no input
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
            
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel"); 
        }
    }
    
});