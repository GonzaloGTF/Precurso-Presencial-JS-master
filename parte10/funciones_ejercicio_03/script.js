do {
    let numero1 = parseInt(prompt("Escribe el primer numero de una division:")), numero2 = parseInt(prompt("Escribe el numero por el que se dividir:"));
    
    if (numero2 != 0){
    function division(num1, num2){
        let calculo = num1 / num2
        return calculo
    }
    let operacion = division(numero1, numero2);
    console.log(operacion)
    }
    else {
       break
    }
}while (true)