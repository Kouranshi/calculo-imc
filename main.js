const button = document.querySelector("#botao");

function resultadoIMC() {
  	let peso = document.querySelector("#peso").value;
  	let altura = document.querySelector("#altura").value;
  	let imc = peso / (altura * altura);
	alert(`Seu IMC é: ${imc.toFixed(2)}`);

    if (imc < 18.5) {
        alert("Você está abaixo do peso.")
    }

    else if (imc >= 18.5 && imc <= 24.9) {
        alert("Você está no peso normal.")
    }

    else if (imc >= 25 && imc <= 29.9) {
        alert("Você está com sobrepeso.")
    }

    else if (imc >= 30 && imc <= 34.9) {
        alert("Você está com obesidade grau 1.")
    }

    else if (imc >= 35 && imc <= 19.9) {
        alert("Você está com obesidade grau 2.")
    }

    else {
        alert("Você está com obesidade grau 3.")
    }
}

botao.addEventListener("click", function(event) {
    event.preventDefault();
    resultadoIMC();
});