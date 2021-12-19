import NavbarBoot from './components/NavbarBoot.js'
import { Route, Routes } from 'react-router'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home.js'
import Login from './components/Login.js'
import Register from './components/Register.js'
import { createContext, useReducer } from 'react'
import { reducer, initialState } from './reducer/UseReducer'
import Vission from './components/Vission.js'
export const currentUser = createContext({})
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <currentUser.Provider value={{ state, dispatch }}>
        <NavbarBoot />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<Vission />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </currentUser.Provider>
    </>
  )
}

export default App
