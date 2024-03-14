import { useContriesData } from "../hooks/useCountriesData"

import { ListCountries } from "./components/ListCountries"

export const Countries = () => {

    let countries = useContriesData()


  return (
    <div>
      <ListCountries countries={countries} />
    </div>
  )
}