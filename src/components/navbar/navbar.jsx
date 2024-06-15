import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const {searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext)
  console.log(searchParam)
  return (
    <nav className='flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap:0'>
        
      <NavLink to={'/'} className='text-black hover:text-gray-700 duration-300'>FoodRecipe</NavLink>
      <form onSubmit={handleSubmit}>
        <input value = {searchParam} onChange={(e)=>setSearchParam(e.target.value)} className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 px-8 rounded-lg border border-gray-300 outline-none lg:w-96 shadow-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-300 ease-in-out transform focus:scale-105" type="text" name="search" id="" placeholder='Enter Item' />
      </form>
      <ul className='flex gap-5'>
        <li>
          <NavLink to={'/'} className='text-black hover:text-gray-700 duration-300'>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/favorites'} className='text-black hover:text-gray-700 duration-300'>Favorites</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
