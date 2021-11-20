import axios from "axios"

const URL = `${process.env.REACT_APP_API}`

const obtenerDrinks = async()=>{
    try {
        let {data} = await axios.get(URL)
        
        return data.drinks
    } catch (error) {
        throw error
    }
}

export{
    obtenerDrinks,
}