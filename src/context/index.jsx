import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({children}){
    const [searchParam, setSearchParam] = useState('')
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState([])
    const [recipeDetailsData, setRecipeDetailsData] = useState(null)
    const [favoritesList, setFavoritesList] = useState([])

    const navigate = useNavigate()

    async function handleSubmit(event){
        event.preventDefault()
        try{
            setLoading(true)
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)
            const data = await res.json()
            console.log(data)
            if(data?.data?.recipes){
                setResult(data?.data?.recipes)
                setLoading(false)
                setSearchParam('')
                navigate('/')
            }
        }catch(e){
            setLoading(true)
            setError(e)
            searchParam('')
            console.log(e)
        }
    }

    function handleAddToFavorite(getCurr){
        let copyList = [...favoritesList]
        const index = copyList.findIndex(item=> item.id === getCurr.id)
        if(index === -1){
            copyList.push(getCurr)
        }else{
            copyList.splice(index)
        }
        setFavoritesList(copyList)
    }

    return (<GlobalContext.Provider value ={{favoritesList, handleAddToFavorite, searchParam, setSearchParam, handleSubmit, result, loading, recipeDetailsData, setRecipeDetailsData}}>{children}</GlobalContext.Provider>)
}