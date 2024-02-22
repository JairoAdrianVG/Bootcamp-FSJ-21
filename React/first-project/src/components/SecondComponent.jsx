import { useState } from "react"
import { ThirdComponent } from "./ThirdComponent";

export function SecondComponent() {
    //Declaracion de Estado
    const [nombre,setNombre] = useState("Jorge");

    const cambiarEstado = () => {
      console.log("Apretaste el boton");

      if(nombre === "Jorge"){
        setNombre("Chochan")
      }else{
        setNombre("Jorge")
      }
    }

  return (
    <>
    <h1>Soy el creador de esto y me llamo {nombre}</h1>
    <br/>
    <button onClick={cambiarEstado}>Apretame Pibe</button>

    <ThirdComponent name={nombre}  />
    </>
  )
}

//Estado -> Es la manera que tenemos de guardar informacion
//Nos proporciona una manera de cambiar esa informacion
//[NombreVariable,CambiarValorVariable] = useState(ValorInicial)

