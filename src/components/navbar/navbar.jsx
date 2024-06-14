import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center py-8 container mx-auto flex-col lg:gap-0'>
      <h2 className='text-xl font-semibold'> Food Recipe</h2>
      <form>
        <input className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-red-100 focus:shadow-red-200" type="text" name="search" id="" placeholder='Enter Item' />
      </form>
    </nav>
  )
}

export default Navbar
