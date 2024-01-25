console.log("Holiwi");

// Agarrar un elemento del HTML
const contenedor = document.querySelector("#contenedor");
console.log(contenedor.firstElementChild);

let saludito = document.querySelector(".saludito")
console.log(saludito.innerText);

const btnApretable = document.getElementById("btnNoApretar")


function apretaste(){
    console.log("Estas apretando el boton");
    contenedor.style.backgroundColor = "grey";
    saludito.innerText = "Chauchis"
}

btnApretable.addEventListener('click',() => {
    if(saludito.style.color === "blue"){
        saludito.style.color = "black";
    }else{
        saludito.style.color = "blue";
    }
})

//Crear un elemento de texto
//a traves de un boton cambiar el color de ese texto.
//EL ATRIBUTO DEL COLOR ES COLOR

