import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"
import { Outlet } from "react-router-dom"
import jwtDecode from "jwt-decode"
import { useEffect, useState } from "react"
export default function Layout() {
  const [decodeToken, setDecodeToken] = useState('')
  useEffect(() => {
    if (localStorage.getItem('user') ) {
      setDecodeToken(jwtDecode(localStorage.getItem('user')))
    } else {
      setDecodeToken('')
    }
  }, [])
  return <>
    <Nav decodeToken={decodeToken.name} />
    <Outlet></Outlet>
    <Footer />
  </>
}