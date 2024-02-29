// Administrar todo lo relacionado con countries
import { ListCountries } from "./components/ListCountries";
import { useCountriesData } from "../hooks/useCountriesData";
import { useState } from "react";

export const Countries = () => {
  const [region,setRegion] = useState("");

  let countries = useCountriesData(region)
  
  return (
    <> 
      <label>
        Filter by Region:

        <select onChange={(e) => setRegion(e.target.value)}>
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europa">Europa</option>
          <option value="Oceania">Oceania</option>
        </select>
      </label>

    { countries.length > 0 ? <ListCountries countries={countries} /> : <h1>Loading...</h1> }
    </>
  )
}

//Custom Hook -> Es una funcion personalizada por cada dev, la cual aporta caracteristicas
//dependiendo la necesidad del dev permitiendo   la reutilizacion

//Renderizado -> Mostrar un contenido
//Condicional -> Dependende de algo (IF)

// Renderizado condicional -> Mostrar un contenido, dependiendo de algo

