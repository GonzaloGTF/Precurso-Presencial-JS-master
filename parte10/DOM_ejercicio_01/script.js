let numeroUsuario = parseInt(prompt("Escribe un numero:"))

let p = document.querySelector("#num");
p.innerHTML = numeroUsuario;


button = document.querySelector("#btn");

button.addEventListener("click", function () {numeroCalculo(numeroUsuario)});

function numeroCalculo(number) {
    p.innerHTML = parseInt(p.innerHTML) + number;
}