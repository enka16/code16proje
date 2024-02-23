import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <div className='bg-black h-16 text-white flex items-center justify-between my-5'>
      <div className='text-6xl'>
      <h1 className="text-orange-600 mt-2 ml-3 mb-2 text-5xl font-medium leading-tight text-primary">
      BURSA - NE - NEREDE
    </h1>
      </div>
      <div className='flex items-center gap-8'>
    <NavLink to="/" className='text-3xl h-12 bg-gray-300 text-black hover:bg-orange-300 cursor-pointer mx-4 mt-2 mb-2 flex items-center border p-3 rounded-full'>Ana Sayfa</NavLink>
    <NavLink to="/egitim" className='text-3xl h-12 bg-gray-300 text-black hover:bg-orange-300 cursor-pointer mx-4 mt-2 mb-2 flex items-center border p-3 rounded-full'>Eğitim</NavLink>
    <NavLink to="/saglik" className='text-3xl h-12 bg-gray-300 text-black hover:bg-orange-300 cursor-pointer mx-4 mt-2 mb-2 flex items-center border p-3 rounded-full'>Sağlık</NavLink>
    <NavLink to="/ulasim" className='text-3xl h-12 bg-gray-300 text-black hover:bg-orange-300 cursor-pointer mx-4 mt-2 mb-2 flex items-center border p-3 rounded-full'>Ulaşım</NavLink>
      </div>
    </div>
    </>
  )
}

export default Navbar
