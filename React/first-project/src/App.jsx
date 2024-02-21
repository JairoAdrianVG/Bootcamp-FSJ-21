import './App.css'

import { FirstComponent } from './components/FirstComponent'
import { SecondComponent } from './components/SecondComponent'

function App() {

  return (
    <>
     {/* Fragment -> ES UNA ETIQUETA CONTENEDORA */}
      <h1>Holiwi, llegamos a REACT :* </h1>
      {/*Esta es la llamada a mi PrimerComponente */ }
       <FirstComponent />

       <SecondComponent />
    </>
  )
}

export default App

