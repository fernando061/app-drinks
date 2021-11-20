import {useState, useEffect, useContext} from 'react'
import { CarritoContext } from '../context/CarritoContext'
import {Link} from "react-router-dom"
import { useHistory } from 'react-router'
import Swal from "sweetalert2"

export default function CartsDrinks({drinks}) {
    
    const {anadirACarrito,carrito} = useContext(CarritoContext)
    const history = useHistory()
    const random=(min, max,prod)=> {

        let price = Math.floor((Math.random() * (max - min + 1)) + min);
        prod.precio=price

        return price
    }

    const anadirACarritoContext = async(prod) => {
        anadirACarrito(prod)
        console.log(prod)
        
        const resultado = await Swal.fire({
            icon:'success',
            title:"Producto añadido!",
            showConfirmButton:true,
            showDenyButton:true,
            confirmButtonText:'Seguir comprando',
            denyButtonText:'Ir a carrito'
        })
        if(resultado.isConfirmed){
            history.push('/')
        }else if(resultado.isDenied){
            history.push('/carrito')
        }
    }

    console.log()

    return (
        <div className="container">
            <div className="row mt-3">
            {drinks.map((prod, i) => (
                    

                    <div className="col-6 col-lg-3 " key={i}  >
                            <input type="text" hidden value={prod.idDrink}/>
                            <img 
                                src={prod.strDrinkThumb} 
                                className="card-img-top"
                                alt={prod.strGlass}
                            />
                            <div className="card-body">
                                <h6 className="card-title">
                                    {prod.strGlass}
                                </h6>
                                <span className="fw-bold">
                                    S/{random(100,300,prod)}
                                </span>
                                <button 
                                    className="btn btn-dark btn-lg"
                                    onClick={()=>anadirACarritoContext(prod)}
                                    style={{margin:"10px"}}
                               > 
                                    <i className="fas fa-shopping-cart me-2"/>
                                    Añadir a Carrito
                                </button>
                                
                            </div>
                           
                            
                       
                    </div>
                ))}
            </div>
           
        </div>
    )
}
