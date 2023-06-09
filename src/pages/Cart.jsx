import React from 'react'
import { useSelector } from 'react-redux'

const cart = () => {
    const cartItems = useSelector(store => store.cart.items)
    return (
        <div>
            <h1>Cart Items - {cartItems.lenght}</h1>
        </div>
    )
}

export default cart