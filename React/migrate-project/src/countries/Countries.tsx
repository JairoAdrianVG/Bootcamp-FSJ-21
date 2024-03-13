import { useContriesData } from "../hooks/useCountriesData"

export const Countries = () => {

    let countries = useContriesData()

  return (
    <div>Countries</div>
  )
}
