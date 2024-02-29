// Custom Hook -> Es una funcion la cual crea un desarrollador para realizar una tarea especifica
// Respestando la sintaxys de React y sus Hooks (useEffect, useState)

import { useEffect,useState } from "react"

export const useCountriesData = (regionFilter) => {
    const [countries,setCountries] = useState([])
    
useEffect( ( )=> {    

    const fetchCountries = async () => {
        let response = await fetch('https://restcountries.com/v3.1/all')
        let data = await response.json()
        let filteredCountries = data; //Guardamos la informacion que teniamos en una variable
        console.log(data); // Vemos la informacion traida de la API

        if(regionFilter){
            filteredCountries = filteredCountries.filter((country) => country.region === regionFilter )
        }

        setCountries(filteredCountries) // Guardamos la informacion en un estado
    }

    //Filtrar informacion por 2 maneras -> a traves de la respuesta, a traves de la url de la api

    //Ejecutamos la funcion declarada para obtener los datos
    fetchCountries();

},[regionFilter])

    //Retornar (devolver) los datos guardados en mi estado
    return countries
}

//Ejemplo en archivo JS
/*
export const useCountriesDataJS = () => {
    let countries = []
    
    const fetchCountries = async () => {
        let response = await fetch('https://restcountries.com/v3.1/all')
        let data = await response.json()
        console.log(data); // Vemos la informacion traida de la API
        countries = data // Guardamos la informacion en un variable
    }

    //Ejecutamos la funcion declarada para obtener los datos
    fetchCountries();

    //Retornar (devolver) los datos guardados en mi variable
    return countries
}
*/
