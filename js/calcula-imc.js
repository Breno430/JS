var titulo = document.querySelector(".titulo");
titulo.textContent = "Breno";


var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length ; i++){

    var paciente = pacientes[i];

    var pdpeso = paciente.querySelector(".info-peso");
    var peso = pdpeso.textContent;


    var pdaltura = paciente.querySelector(".info-altura");
    var altura = pdaltura.textContent;

    var tdimc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdimc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");

    }

    if (!alturaEhValida){
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdimc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso, altura);
        tdimc.textContent = imc;
    }

}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >=0 && altura <= 3){
        return true;
    }else{
        return false;
    }
}


function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

