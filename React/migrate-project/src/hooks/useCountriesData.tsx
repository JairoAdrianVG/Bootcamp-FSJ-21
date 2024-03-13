//Archivo TSX -> Migrate Project
import { useEffect } from "react"
import { ICountry } from "../models/ICountry"


export const useContriesData = () : ICountry[] => {
    
    useEffect( ( )=> {

        const fetchCountries = async () => {
                let response:Response = await fetch('https://restcountries.com/v3.1/all')
                let data:ICountry[] = await response.json()
                console.log(data);
        }

        fetchCountries()
    },[])

    return []
}
