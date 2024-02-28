// Administrar todo lo relacionado con countries
import { useEffect, useState } from "react";
import { ListCountries } from "./components/ListCountries";

export const Countries = () => {
    const [countries,setCountries] = useState([])

    const fetchCountries = async () => {
        let response = await fetch('https://restcountries.com/v3.1/all')
        let data = await response.json()
        console.log(data); // Vemos la informacion traida de la API
        setCountries(data) // Guardamos la informacion en un estado
    }

    useEffect( () => {
        fetchCountries();
    }, [])
    
  return (
    <> 
        <ListCountries countries={countries} />
    </>
  )
}

