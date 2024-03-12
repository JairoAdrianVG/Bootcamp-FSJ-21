import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../context/UserDataContext"

export const Home = () => {

  //me traigo la informacion de mi contexto
  const {data,setData} = useContext(UserContext)

  return (
    <div>
        <h1>Bienvenido amiwito</h1>
        { data ? <h1>{data.email}</h1> : <Link to='/login' className="btn btn-primary">Log In</Link> }
    </div>
  )
}


