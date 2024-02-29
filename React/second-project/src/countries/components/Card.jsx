
export const Card = ({country}) => {
    
  return (
    <div>
        <h1>Name: {country.name.common}</h1>
        <img src={country.flags.png} alt={country.flags.alt} />
        <h3>Region: {country.region}</h3>
    </div>
  )
}
