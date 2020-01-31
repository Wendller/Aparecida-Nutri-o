var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    // Extraindo informacoes do form
    var paciente = criaPaciente(form);
    
    // Cria elementos td e tr

    // Validando paciente
    
    adicionaPacienteTabela(paciente);

    form.reset();

    
    
});

function criaPaciente(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function criaTr(paciente) {

    var pacienteTr = document.createElement("tr");
    // Adicionar classe ao objeto
    pacienteTr.classList.add("paciente");
    
    var nomeTd = criaTd(paciente.nome, "info-nome");
    var pesoTd = criaTd(paciente.peso, "info-peso");
    var alturaTd = criaTd(paciente.altura, "info-altura");
    var gorduraTd = criaTd(paciente.gordura, "info-gordura");
    var imcTd = criaTd(paciente.imc, "info-imc");
    
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function criaTd(dado, classe) {
   var td = document.createElement("td");
   td.textContent = dado;
   td.classList.add(classe);
   
   return td;
}

function validaPaciente(paciente) {

    if (paciente.nome.length == 0) {
        return "Insira um nome válido!"
    }

    var erros = ["Peso inválido", "Altura inválida", "Dados inválidos!"]
    if (validaAltura(paciente.altura) && validaPeso(paciente.peso)) {
        return "";
    } 

    if (!validaAltura(paciente.altura) && !validaPeso(paciente.peso)) {
        return erros[2];
    }

    if (!validaPeso(paciente.peso)) {
        return erros[0];
    }

    if (!validaAltura(paciente.altura)) {
        return erros[1];
    }

    
}

function adicionaPacienteTabela(paciente) {
    var pacienteTr = criaTr(paciente);
    var erro = validaPaciente(paciente);

    if (erro.length > 0) {
        var mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.textContent = erro;
        return;
    }
    // Adiciona tr na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    var zeraErro = document.querySelector("#mensagem-erro");
    zeraErro.innerHTML = "";
}