const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCursos = document.querySelector('#lista-cursos');
let cursosCarrito = [];

//btnAgregar.addEventListener('click',agregarCurso)

function agregarCurso(e){
    e.preventDefault()
   //console.log(e.target.parentElement.parentElement);
   let cursoSeleccionado = e.target.parentElement.parentElement;
   leerDatosCurso(cursoSeleccionado);
}

function leerDatosCurso(curso){
   // console.log(curso.querySelector('a').getAttribute('data-id'));

    //Objeto = {} atributos(caracteristicas) : VALOR A ASIGNAR
    const infoCurso = {
        id: curso.querySelector('a').getAttribute('data-id'),
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('h5').textContent,
        cantidad: 1
    }

    //Ver si el curso ya existe en el carrito
    const existe = cursosCarrito.some( curso => curso.id === infoCurso.id)

    if(existe){
        cursosCarrito.map( curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad += 1
                return curso; //va a dejar el curso en el array actualizado(con cantidad +1).
            }
        });
    } else{
        cursosCarrito.push(infoCurso);
    }
    pintarCarritoHTML()
}

function pintarCarritoHTML(){

    //Limpiar el carrito
    limpiarCarritoHTML();

    //Metodo MAP arrays = Recorrer el array y devolver o ejecutar algo con cada posicion
    cursosCarrito.map( (curso) => {
        //Creamos el elemento tr de la tabla
        const fila = document.createElement('tr');
        //Asignamos un valor con innerHTML a esa fila
        fila.innerHTML = `
        <td> <img src="${curso.imagen}" width="100"> </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>${curso.cantidad}</td>
        <td><a href="#" onclick="eliminarConId(${curso.id})">X</a></td>
        `                                                                           
        
    //Agrego la fila al contendor del carrito (tbody)
    contenedorCarrito.appendChild(fila)
    })
}

function limpiarCarritoHTML() {
    contenedorCarrito.innerHTML = ''; // Limpiar el contenido de una manera más directa
}

function vaciarCarrito(e){ 
    e.preventDefault();
    cursosCarrito = [];
    limpiarCarritoHTML();
}

function eliminarConId(id) {
  cursosCarrito.map(curso => {
    if(curso.id == id ){
        if(curso.cantidad > 1){
            curso.cantidad -=1 
            return curso
        }else{
            cursosCarrito = cursosCarrito.filter( curso => curso.id != id )
        }
        
       
    }
  
 })
     
 pintarCarritoHTML()

}