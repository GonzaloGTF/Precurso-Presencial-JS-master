function mayorMenor (num1, num2){
    return (num1 > num2)
}

let numero1 = parseInt(prompt("Escribe un numero:")), numero2 = parseInt(prompt("Escribe otro numero:"))

let resultado = mayorMenor(numero1, numero2)

if (resultado){
    console.log("El primer número es más grande")
}
else {
    console.log("El primer número no es más grande")
}