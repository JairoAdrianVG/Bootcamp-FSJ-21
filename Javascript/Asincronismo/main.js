console.log("Hola FSJ21");

//Promesas -> Con Promise, como se hacia anteriormente
/*
function miPromesa(){
return   new Promise((resolve,reject) => {

    setTimeout(() => {
        const exito = false;
        if(exito){
            resolve("Funciono")
        }else{
            reject(new Error("Que mala pata, no funciono"))
        }
    }, 1000)

    })
}

miPromesa()
.then((resultado)=> {
    console.log("Estado: ",resultado);
})
.catch((error) =>{
    console.error("Error:",error)
}
) 

*/

//Metodo Fetch => Metodo asincrono, el cual se encarga de mandar a buscar datos a una api

async function miFetch(){
    //Try -> Intenta hacer esto
try{
    let respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')

    if(!respuesta.ok){
        throw new Error("Ocurrio un error: codigo de error "+respuesta.status)
    }else{
        let data = await respuesta.json()
    console.log(data);
    }
    
} catch(error){
    //Si falla por X motivo, mostrame el error
    console.error(error)

    alert("Disculpas, pero tu peticion fallo")
}
}

miFetch();
