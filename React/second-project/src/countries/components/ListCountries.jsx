import { Card } from "./Card"

export const ListCountries = ({countries}) => {

  return (
    <>
        {countries.map( (country) => {
        return <Card country={country} />
        }
        )}
    </>
  )
}
