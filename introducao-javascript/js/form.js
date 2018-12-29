var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function () {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = getDadosPaciente(form);
    console.log(paciente);

    var erros = validaPaciente(paciente)

    if (erros.length > 0) {
        exibeMensagensErro(erros);
        return;
    }else {
        limpaTela(form);
    }
    // var alturaValida = validaAltura(paciente.altura);
    // var pesoValido = validaPeso(paciente.peso);
    // if (pesoValido && alturaValida){
    //     var erro = document.querySelector("#mensagem-erro");
    //     erro.remove();
    //     form.reset();
    // } else if (!pesoValido && !alturaValida) {
    //     var erro = document.querySelector("#mensagem-erro");
    //     erro.textContent = "Peso e Altura invalidos !";
    //     return;
    // } else if (!alturaValida){
    //     var erro = document.querySelector("#mensagem-erro");
    //     erro.textContent = "Altura invalida !";
    //     return;
    // } else {
    //     var erro = document.querySelector("#mensagem-erro");
    //     erro.textContent = "Peso invalido !";
    //     return;
    // }

    montaTabela(paciente);
    console.log("Adicionando");
});

function montaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}


function getDadosPaciente(form) {
    //Cria objetos em javascript
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return  pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    var erros = [];

    if(paciente.nome.length == 0) {
        erros.push("Nome não pode estar em branco!");
    }

    if(paciente.peso.length == 0) {
        erros.push("Peso não pode estar em branco!")
    }

    if(paciente.gordura.length == 0) {
        erros.push("Gordura não pode estar em branco!")
    }

    if(!validaPeso(paciente.peso)) {
     erros.push("Peso é invalido!");
    }

    if(!validaAltura(paciente.altura)) {
        erros.push("Altura é invalida!");
    }


    return erros;
}

function exibeMensagensErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function limpaTela(form) {
    var limpa = document.querySelector("#mensagens-erro");
    limpa.innerHTML = "";
    form.reset();
}