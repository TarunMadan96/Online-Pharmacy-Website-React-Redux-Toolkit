import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Account } from "./pages/account/Account"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { useSelector } from "react-redux"
import { Register } from "./pages/login/Register"

const App = () => {
  const isLoggIn = useSelector((state) => state.auth.isLoggIn)
  const cartItems = useSelector((state) => state.cart.itemsList)
  console.log(cartItems)
  return (
    <>
      {isLoggIn && (
        <Router>
          <Header />
          <Routes>
            <Route  path='/' element={<Home />} />
            <Route  path='/regsiter' element={<Register/>} />
            <Route  path='/account' element={<Account />} />
          </Routes>
          <Footer />
        </Router>
      )}
      {!isLoggIn && <Login />}
    </>
  )
}
export default App