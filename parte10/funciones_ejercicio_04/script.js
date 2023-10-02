
let cantidad = parseInt(prompt("Cantidad de euros que quieres convertir:")), tipo = prompt("¿A qué quieres convertirlo: libras, dolares o yenes?").toLowerCase()

function cambio (cant, moneda){
    
    if(moneda == "libras"){
    var calculo = cant * 0.86
    }

    else if(moneda == "dolares"){
    var calculo = cant * 1.28611
    }

    else {
    var calculo = cant * 129.852
    }

    console.log(cant + " euros son " + calculo + " " + moneda)
}

console.log(cambio (cantidad, tipo))
