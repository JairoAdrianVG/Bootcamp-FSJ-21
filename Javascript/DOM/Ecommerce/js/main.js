const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCursos = document.querySelector('#lista-cursos');

listaCursos.addEventListener('click',agregarCurso)

function agregarCurso(e){
    e.preventDefault()
   //console.log(e.target.parentElement.parentElement);
   let cursoSeleccionado = e.target.parentElement.parentElement;
   leerDatosCurso(cursoSeleccionado);
}

function leerDatosCurso(curso){
    console.log(curso);

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('h5').textContent
    }

    console.log(infoCurso);
}

//infoCurso.imagen = "./images/curso1"
//infoCurso.titulo = "HTML Y CSS"
//infoCurso.precio = "$15.00"

// persona { }

let persona = { 
    ojos : "rojos",
    cabello: "largo",
    edad: 25,

}

//Caracteristicao o atributo : VALOR