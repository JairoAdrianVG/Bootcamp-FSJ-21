import { ICountry } from "../../models/ICountry"

interface ICountryProps{
    country: ICountry
}

export const CardCountry:React.FC<ICountryProps> = ({country}) => {
  return (
    <div>
        <h1>{country.name.common}</h1>
        <img src={country.flags.svg} alt={country.flags.alt} />
        <h3>Region: {country.region}</h3>
    </div>
  )
}
