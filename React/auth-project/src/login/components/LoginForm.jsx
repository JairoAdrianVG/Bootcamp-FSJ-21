
export const LoginForm = () => {
  return (
    <>
    <h1>Amiwito inicie su sesion</h1>
    <div className="card">
            <div className="card-body">
                <div className="row">
                    <label className="form-label">Ingrese su mail</label>
                    <input type="text" className="form-control" placeholder="Ingrese su email"/>
                </div>
                <div className="row">
                <label for="inputPassword5" class="form-label">Password</label>
                <input type="password" id="inputPassword5" class="form-control" placeholder="ingrese su password" />
                </div>
                <div className="row">
                    <button className="btn btn-info">Login</button>
                </div>
            </div>
        </div>
    </>
  )
}
