import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from './home/Home'
import { Login } from './login/Login'
import { MyProvider } from './context/UserDataContext'
function App() {

  return (
    <>
    <MyProvider>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home/>} />
          <Route path='/login' element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </MyProvider>
    </>
  )
}

export default App
