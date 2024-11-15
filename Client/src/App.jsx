import './App.css'
import Advice from './Componets/Advice'
// import SignUp from './Componets/SignUp'
// import Login from './Componets/Login'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './Componets/Home'
function App() {

  return (
    <>
      <div>
        {/* <BrowserRouter>
        <Routes>
          <Route path="/register" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
        </BrowserRouter> */}
        <Advice/>
      </div>
    </>
  )
}

export default App
