
export const Card = ({country}) => {
    
  return (
    <div>
        <h1>{country.name.common}</h1>
        <img src={country.flags.png} alt={country.flags.alt} />
    </div>
  )
}
