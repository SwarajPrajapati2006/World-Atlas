import React from 'react'
import { Outlet } from 'react-router-dom'
import Headers from './UI/Headers'
import Footer from './UI/Footer'
const AppLayout = () => {
  return (
    <>
    <Headers/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default AppLayout