import { useState } from "react"

export function SecondComponent() {
    //Declaracion de Estado
    const [nombre,setNombre] = useState("Jairo");

  return (
    <>
    <h1>Soy el creador de esto y me llamo {nombre}</h1>
    </>
  )
}

//Estado -> Es la manera que tenemos de guardar informacion
//Nos proporciona una manera de cambiar esa informacion
//[NombreVariable,CambiarValorVariable] = useState(ValorInicial)
