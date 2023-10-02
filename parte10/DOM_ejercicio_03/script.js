button = document.querySelector("#btn");
img = document.querySelector("#imagen");

button.addEventListener("click", cambio);
let cont = 0
function cambio() {
    cont += 1
  if(cont % 2 == 1){
      img.src = "./anverso.jpg"
  }
  else{
      img.src = "./reverso.png"
  }
}

