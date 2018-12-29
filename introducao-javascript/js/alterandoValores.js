console.log("chegou aqui");
var pacientes = document.querySelectorAll(".paciente");

var meusPacientes = document.querySelector(".meus-pacientes");

console.log(meusPacientes);

for(var i = 0; i < pacientes.length; i++) {
var paciente = pacientes[i];
console.log(paciente);
var testando = document.querySelector(".titulo");

    console.log(testando.textContent);
    testando.textContent = "Eu parado no bailão";
// Pega dados do paciente
var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    console.log(peso);
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    console.log(altura);
    var imc = paciente.querySelector(".info-imc");

    var alturaValida = validaAltura(altura);
    var pesoValido = validaPeso(peso);

// Valida
    if(!pesoValido) {
        console.log("Peso Invalido!");
        tdPeso.textContent = "Peso Invalido!";
        imc.textContent = "Invalido!";
        paciente.classList.add("paciente-invalido");
        //paciente.style.color = "red";
        //paciente.style.backgroundColor = "lightcoral";
    }

    if(!alturaValida) {
        console.log("Altura Invalido!");
        tdAltura.textContent = "Altura Invalido!";
        imc.textContent = "Invalido!";
        paciente.classList.add("paciente-invalido");
    }

if(pesoValido && alturaValida) {
    var resultado = calculaImc(peso, altura);
    imc.textContent =  resultado;
    }
}

meusPacientes.addEventListener("click", function () {
  console.log("Clicou");
  //alert("clicou");
});

function calculaImc(peso, altura) {
    var resultado = 0;
    resultado = (peso / (altura * altura));
    return resultado.toFixed(2);
}

function validaPeso(peso) {
    if(peso >= 0 && peso < 1000){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
   if (altura > 0 && altura <= 3.00) {
       return true;
   }
   return false;
}
/*function mostraMensagem(){
    console.log("Clicou");
}*/