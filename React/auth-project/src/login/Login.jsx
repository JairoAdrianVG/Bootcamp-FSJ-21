import { useState } from "react"
import { LoginForm } from "./components/LoginForm"
import { SignUpForm } from "./components/SignUpForm";

export const Login = () => {
    const [typeForm, setTypeForm] = useState(null);

  return (
    <>
      <button className="btn btn-primary m-2" onClick={e => {setTypeForm("Login")}}>Login</button>
      <button className="btn btn-success m-2" onClick={e => {setTypeForm("Signup")}}>SignUp</button>
      { typeForm === "Signup"?  <SignUpForm /> : <LoginForm />}
    </>
  )
}
