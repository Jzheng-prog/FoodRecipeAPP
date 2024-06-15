import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../context'

const Details = () => {
  const {id} = useParams()
  const {recipeDetailsData, setRecipeDetailsData,favoritesList, handleAddToFavorite} = useContext(GlobalContext)

  useEffect(()=>{
    async function getRecipeDetails(){
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      const data = await response.json();
      if(data?.data){
        setRecipeDetailsData(data?.data.recipe)
      }
    }
    getRecipeDetails()
  },[])
  
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-1 gap-10">
      <div className="flex flex-col lg:flex-row gap-10">
        
        <div className='h-96 overflow-hidden rounded-xl group flex-shrink-0 lg:w-1/2'>
          <img
            src={recipeDetailsData?.image_url}
            alt={recipeDetailsData?.title}
            className="w-full h-full block group-hover:scale-105 duration-300"
          />
        </div>

        <div className="flex flex-col gap-3 flex-grow lg:w-1/2">
          <h3 className="text-xl font-semibold">{recipeDetailsData?.title}</h3>
          <h1 className='text-xl font-semibold text-left'>Ingredients</h1>
          <div>
            <ol className='list-decimal list-inside text-left font-bold'>
              {recipeDetailsData?.ingredients.map((ingredient, index) => (
                <li key={index}>
                  <span>{ingredient.description}: {ingredient.quantity} {ingredient.unit}</span>
                </li>
              ))}
            </ol>
            <p className="text-gray-600 text-left mt-3">Publisher: {recipeDetailsData?.publisher}</p>

          </div>

          <button onClick={() => handleAddToFavorite(recipeDetailsData)}
            className='p-3 px-8 rounded-lg text-sm uppercase tracking-wider mt-3 inline-block shadow-md bg-black text-white'>
            {
              favoritesList && favoritesList.length > 0 && favoritesList.findIndex(item => item.id === recipeDetailsData?.id) !== -1 ?
              'Remove From List' :
              "Add to Favorites"
            }
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details
