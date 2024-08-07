const inicio = () => {
    const main = document.querySelector("main")
    main.innerHTML = ""
    const titulo = document.createElement("h1")
    const btnAñadir = document.createElement("button")
    const btnRandomear = document.createElement("button")
    const formulario = document.createElement("form")
    const input = document.createElement("input")
    const input2 = document.createElement("input")
    btnAñadir.id = "añadir"
    btnRandomear.id = "randomear"
    titulo.innerText = "Random Restaurant"
    btnAñadir.innerHTML = "Añade otro Restaurante"
    btnRandomear.innerHTML = "RANDOMEAR"
    input.type = "text"
    input.placeholder = "Rollea un Restaurant"
    input2.type = "text"
    input2.placeholder = "Rollea un Restaurant"
    
    main.appendChild(titulo)
    main.appendChild(btnAñadir)
    formulario.appendChild(input)
    formulario.appendChild(input2)
    main.appendChild(formulario)
    main.appendChild(btnRandomear)
}

inicio () 

const catchBTNAñadir = document.getElementById("añadir")
const catchBTNRandomear = document.getElementById("randomear")
const buttonRegresoAInicio = document.createElement("button")
buttonRegresoAInicio.id = "regreso"
buttonRegresoAInicio.innerText = "Randomear Otra Vez"


catchBTNAñadir.onclick = function (){
    const catchForm = document.querySelector("form")
    const inputAñadido = document.createElement("input")
    inputAñadido.placeholder = "Rollea un Restaurant"
    catchForm.appendChild(inputAñadido)
}


catchBTNRandomear.onclick = function (){
    
    const catchInput = document.querySelectorAll("input")
    let arrayDeLugares = []
    for (const input of catchInput){
        if (input.value !== ""){
            arrayDeLugares.push (input.value)     
        }
    }
    function buscador (min, max){
        min = 0
        max = arrayDeLugares.length-1
        return arrayDeLugares[Math.floor(Math.random() * (1 + max - min) + min)]

    }
    const mainBorrado = document.querySelector("main")
    mainBorrado.innerHTML = ""
    const titulo = document.createElement("h1")
    titulo.innerText = "Su Random Restaurat es..."
    mainBorrado.appendChild(titulo)
    const restauranteElegido = document.createElement("h1")
    restauranteElegido.innerHTML = buscador()
    mainBorrado.appendChild(restauranteElegido)
     mainBorrado.appendChild(buttonRegresoAInicio)
}

buttonRegresoAInicio.addEventListener("click", function () {
    inicio ()
})











//tratando en este punto de regresar todo al principio



        

 







      

 
 