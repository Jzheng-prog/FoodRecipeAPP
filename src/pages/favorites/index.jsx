import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import RecipeItem from '../../components/recipe-Item/recipeItem'

const Favorites = () => {

  const {favoritesList} = useContext(GlobalContext)

  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {
        favoritesList && favoritesList.length > 0 ?

        favoritesList.map((item)=>
          <RecipeItem key={item.id} item = {item}/>
        )
        
        : 
        <div>
          <p className='lg:text-4xl text-xl text-center text-black'>No Favorites Added!</p>
        </div>
      }
    </div>
  )

}

export default Favorites
