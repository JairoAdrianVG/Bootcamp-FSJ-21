//Archivo TSX -> Migrate Project
import { useEffect, useState } from "react"
import { ICountry } from "../models/ICountry"


export const useContriesData = () : ICountry[]  => {
    const [listCountries,setListCountries] = useState<ICountry[]>([])

    useEffect( ( )=> {

        const fetchCountries = async () => {
                let response:Response = await fetch('https://restcountries.com/v3.1/all')
                let data:ICountry[] = await response.json()
                console.log(data);
                setListCountries(data)
        }

        fetchCountries()
    },[])

    return listCountries
}
