import {Route} from 'react-router-dom'
import React from 'react'
import PortadaView from './views/PortadaView'
import CarritoView from './views/CarritoView'

export default function Routes() {
    return (
        <div>
            <Route path="/" exact component={PortadaView} />
            <Route path="/carrito" exact component={CarritoView}/>
        </div>
    )
}
