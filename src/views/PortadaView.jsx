import {useState, useEffect} from 'react'
import { obtenerDrinks } from '../services/DrinkService'
import CustomCarousel from '../components/CustomCarousel'
import CartsDrinks from '../components/CartsDrinks'


export default function PortadaView() {
    const URL = `${process.env.API_DRINKS}`
    const [drinks, setDrinks] = useState([])


    const getDrinks = async()=>{
        try {
            let drinksObtenidos = await obtenerDrinks()
            setDrinks(drinksObtenidos)
           
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getDrinks()
    },[])
    return (
        <div>
            <CustomCarousel />
            <CartsDrinks drinks={drinks}/>
        </div>
    )
}
