function calculaPrecioTotal(precio, porcentajeImpuestos) {
  let gastosEnvio = 10;
  let precioConImpuestos = (1 + porcentajeImpuestos / 100) * precio;
  let abc = precioConImpuestos + gastosEnvio;
  return abc;
}

let precioTotal = calculaPrecioTotal(23.34, 16);
console.log(precioTotal)
let otroPrecioTotal = calculaPrecioTotal(15.2, 4);
console.log(otroPrecioTotal)