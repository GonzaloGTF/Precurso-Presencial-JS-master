function hola(numVeces){
    var calculo = ""
    for (let i = numVeces; i > 0; i--){
        calculo += "Hola ";
    }
    return calculo
}

let numero5 = hola(5)
console.log(numero5.trim())
let numero3 = hola(3)
console.log(numero3.trim())
