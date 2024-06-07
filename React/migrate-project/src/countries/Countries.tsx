//import { useState } from "react"
import { useContriesData } from "../hooks/useCountriesData"
import { ListCountries } from "./components/ListCountries"
import { Dropdown } from "../components/Dropdown";

export const Countries = () => {
    //guardar la region
    //const [region,setRegion] = useState("")

    const arraycito = [{name:"America",value:"Americas"},{name:"Europa",value:"Europe"},{name:"Oceania",value:"Oceania"},{name:"Asia",value:"Asia"},{name:"Africa",value:"Africa"}]
    const valor = "Selecciona un continente: "
    const countries = useContriesData();
    //console.log(countries);

  
  return (
    <div>
      <Dropdown label={valor} options={arraycito} />  
      <ListCountries countries={countries} />
    </div>
  )
}

  // saber lugar CHECK
  // agregar estado para almacenar la info (region) CHECK
  // crear filter 
  // crear archivo para la funcion de filtrado