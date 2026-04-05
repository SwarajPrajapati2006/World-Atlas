import React from 'react'
import { useRouteError,NavLink } from 'react-router-dom'

const ErrorPage = () => {

    const error =  useRouteError();
    console.log(error)
  return (
    <>
  <main className='min-h-screen bg-black'>
    <h1 className='text-zinc-300 text-4xl '>OOPS!...Error Found .This route is not available</h1>
    

    <NavLink to="home" className="text-4xl text-amber-100 font-bold" ><button>GO to Home page</button></NavLink>
</main>
      </>
  )
}

export default ErrorPage