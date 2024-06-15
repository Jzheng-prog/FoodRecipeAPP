import React from 'react'
import { Link } from 'react-router-dom'

const RecipeItem = ({item}) => {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
      <div className='h-40 flex justify-center overflow-hidden items-center round-x1'>
        <img src={item?.image_url} alt="recipe item" className="block w-full" />
      </div>
      <h3 className="text-xl font-semibold">{item?.title}</h3>
      <p className="text-gray-600">Publisher: {item?.publisher}</p>
      <Link to={`/recipe-item/${item?.id}`} className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider bg-black inline-block shadow-md text-white">
        Recipe Details
      </Link>
    </div>
  )
}

export default RecipeItem
