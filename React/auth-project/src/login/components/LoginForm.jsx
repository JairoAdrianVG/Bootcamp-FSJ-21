import { useState } from "react";

export const LoginForm = () => {

  const [userCredentials,setUserCredentials] = useState({})

  const handleCredentials = (e) => {
    setUserCredentials({...userCredentials,[e.target.name]: e.target.value })
    //console.log(`${e.target.name}: ${e.target.value}`);
    console.log(userCredentials);
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
                    <button className="btn btn-info">Login</button>
                </div>
            </div>
        </div>
    </>
  )
}
