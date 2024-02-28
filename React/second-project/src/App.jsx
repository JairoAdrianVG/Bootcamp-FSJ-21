import './App.css'
import { Countries } from './countries/Countries'

function App() {

//Estructura useEffect
//useEffect(FUNCION,ARRAYDependencia )
/*Casos de uso useEffect -> Sincronizar Datos, Traer datos (API)
  useEffect( ()=> { 

  }, [])
*/

  return (
    <>
      <h1>Holiwi</h1>
      {/* Siempre para mostrar un dato, por ejemplo un estado utilizo las {}*/}
      <Countries/> 
    </>
  )
}

export default App

// Gestion o manipulacion de datos que se van cambiando a lo largo del tiempo en la app
// Un dato que cambia en un componente a traves de eventos
// Algo que guarda datos temporalmente
// Dato cambiante que se modifica en base a la necesidad de la trama 
// Manera de guardar informacion y una manera de cambiar la info
