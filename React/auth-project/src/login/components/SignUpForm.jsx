import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase/config"

export const SignUpForm = () => {
 
    const [userCredentials,setUserCredentials] = useState({})

    const handleCredentials = (e) => {
      setUserCredentials({...userCredentials,[e.target.name]: e.target.value })
      //console.log(`${e.target.name}: ${e.target.value}`);
      console.log(userCredentials);
    }
  
    const registerNewUser = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
            .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
    });
        
        
    }
  
    return (
      <>
      <h1>Amiwito registraste poh favoh</h1>
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
                      <button className="btn btn-success" onClick={e => {registerNewUser(e)}}>Sign Up</button>
                  </div>
              </div>
          </div>
      </>
    )
}
