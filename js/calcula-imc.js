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

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdimc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");

    }

    if (altura <= 0 || altura >= 3.00){
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

function calculaImc(){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

