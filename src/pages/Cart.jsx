import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BsCurrencyRupee } from 'react-icons/bs'
import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { calcTotal, clearCart, decreaseQuantity, deleteItem, increaseQuantity } from "../redux/cartSlice";
const cart = () => {
    useEffect(() => {
        dispatch(calcTotal());
    })

    const cartItems = useSelector(store => store.cart.items)
    const totall = useSelector(store => store.cart.total)
    console.log(cartItems);
    const dispatch = useDispatch();
    const clearCar = () => {
        dispatch(clearCart())
    }
    const singleDelete = (item) => {
        console.log(item)
        dispatch(deleteItem(item))

    }
    const incrementQuantity = (item) => {
        dispatch(increaseQuantity(item))
    }
    const decrementQuantity = (item) => {
        dispatch(decreaseQuantity(item))
    }

    return (
        <div>
            <div className=' flex justify-center '>

                {cartItems.length !== 0 && <table className='w-2/3 border-2 border-gray-600 '>
                    <thead className='border-b-2 border-gray-400'>
                        <tr className='w-full '>
                            <th className=''>ITEM</th>
                            <th className=''>PRICE</th>
                            <th className=''>QUANTITY</th>
                            <th className=''>SUBTOTAL</th>
                            <th className=''>REMOVE</th>
                        </tr>
                    </thead>
                    <tbody   >
                        {cartItems.map((item => {
                            return (
                                <tr className='w-full ' key={item?.card?.info?.id}>

                                    <td className='text-center m-1 p-1 md:w-72'>
                                        <div className='flex '>
                                            {(item.card.info.imageId) &&
                                                <img className='w-10 h-12' alt='item'
                                                    src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/" + item?.card?.info?.imageId} >

                                                </img>}
                                            <span className='p-2 hidden md:block'>{(item.card.info.name)}</span>
                                        </div>
                                    </td>
                                    <td className='text-center flex justify-center mt-3'>
                                        <BsCurrencyRupee className='text-2xl'></BsCurrencyRupee>
                                        <div> {(item.card.info.price / 100)}</div>
                                    </td>
                                    <td className='text-center'>
                                        <div className='flex justify-center'>
                                            <AiOutlinePlus onClick={() => incrementQuantity(item)} className='text-xl m-1 bg-green-200 rounded-full' ></AiOutlinePlus>
                                            <div className='text-2xl mx-1'>{item.quantity}</div>
                                            <AiOutlineMinus onClick={() => { item.quantity != 1 ? decrementQuantity(item) : null }} className='text-xl m-1 bg-red-400 rounded-full'></AiOutlineMinus>
                                        </div>
                                    </td>
                                    <td className='text-center flex justify-center'>
                                        <BsCurrencyRupee className='text-2xl'></BsCurrencyRupee>
                                        {(item.card.info.price / 100) * item.quantity}

                                    </td>
                                    <td className='text-center '>
                                        <span >
                                            <AiFillDelete onClick={() => { singleDelete(item) }} className='text-red-500 cursor-pointer text-2xl text-center inline'></AiFillDelete>
                                        </span>
                                    </td>
                                </tr>

                            )
                        }))}
                    </tbody>
                </table>}

            </div>
            {cartItems.length !== 0 &&
                <div className=' flex justify-between mx-60' >
                    <Link to={'/'}> <button className='rounded-md bg-green-600 hover:bg-green-300 hover:text-black m-2 p-2 text-white'>Continue Shopping</button></Link>
                    <button onClick={() => { clearCar() }} className='bg-red-500 rounded-md m-2 p-2 hover:bg-red-300 hover:text-black text-white'>Clear Cart</button>
                </div>
            }
            {cartItems.length !== 0 &&
                <div className=' flex flex-row-reverse'>
                    <div className='mr-36 mt-8 p-2 bg-orange-500 rounded-md   hover:text-black text-white'>
                        <span>Total :- </span>
                        <span>{totall / 100}</span>
                    </div>
                </div>
            }
        </div >

    )
}

export default cart