import React from 'react'
import { useSelector } from 'react-redux'

const cart = () => {
    const cartItems = useSelector(store => store.cart.items)
    console.log(cartItems);
    return (
        <div>
            <h1 className='font-semibold'>Cart Items - {cartItems.length}</h1>
            {cartItems.map((item => {
                return <div key={item.card.info.id} className='flex'>
                    <h1 className='border-r-2 m-2 p-1'>{item.card.info.name}</h1>
                    <h1 className='m-2 p-1'>Price = {item.card.info.price / 100}</h1>
                    <hr className='border'></hr>
                </div>
            }))}
        </div>

    )
}

export default cart