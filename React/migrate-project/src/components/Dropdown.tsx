 interface iDropdownProps{
    options: option[],
    label:string
 }

 interface option{
    name: string,
    value: string
 }

export const Dropdown:React.FC<iDropdownProps>= ({options,label}) => {
  
  return (
    <div>
        <div>
            <label>{label} </label>
              <select>
                {options.map( (continente) => {
                return <option value={continente.value} >{continente.name}</option>
                })}
              </select>
        </div>
    </div>
  )
}
