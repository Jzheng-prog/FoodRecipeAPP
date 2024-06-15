import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import RecipeItem from '../../components/recipe-Item/recipeItem'

const Home = () => {

  const {result, loading, searchParams} = useContext(GlobalContext)

  if(loading){
    return <div>Loading Data...</div>
  }

  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {
        result && result.length > 0 ?

        result.map((item)=>
          <RecipeItem key={item.id} item = {item}/>
        )
        
        : 
        <div>
          <p className='lg:text-4xl text-xl text-center text-black'>No Matching Results. Search Another Ingredient!</p>
        </div>
      }
    </div>
  )
}

export default Home
