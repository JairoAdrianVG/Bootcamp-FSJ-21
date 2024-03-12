import { useState,useContext } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../../firebase/config";
import { UserContext } from "../../context/UserDataContext";
import { useNavigate } from "react-router";

export const LoginForm = () => {

  const [userCredentials,setUserCredentials] = useState({})

    //Destructuring Object 
  const {data,setData} = useContext(UserContext)

  const navigate = useNavigate()

  const handleCredentials = (e) => {
    setUserCredentials({...userCredentials,[e.target.name]: e.target.value })
    //console.log(`${e.target.name}: ${e.target.value}`);
    console.log(userCredentials);
  }

  
  const signInUser = (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
      .then((userCredential) => {
        // Signed in 
       const user = userCredential.user;
       console.log(user);
       //guardamos el usuario que se logeo en mi contexto
       setData(user)

       //volvemos al login
       navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }

  return (
    <>
    <h1>Amiwito inicie su sesion</h1>
    <div className="card">
            <div className="card-body">
                <div className="row">
                    <label className="form-label">Ingrese su mail</label>
                    <input type="text" name="email" className="form-control" placeholder="Ingrese su email" onChange={ e => handleCredentials(e)}/>
                </div>
                <div className="row">
                <label className="form-label">Password</label>
                <input type="password" name="password" className="form-control" placeholder="ingrese su password" onChange={ e => handleCredentials(e)} />
                </div>
                <div className="row mt-2">
                    <button className="btn btn-info" onClick={e => {signInUser(e)}}>Login</button>
                </div>
            </div>
        </div>
    </>
  )
}
