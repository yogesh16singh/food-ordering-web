import React, { useEffect, useState } from 'react'
import Card from './Card'
import Search_bar from './Search_bar'
import carddata from '../helper'

const Body = () => {
    const [restaurantData, setRestaurantData] = useState(carddata);

    useEffect(() => {
        console.log("useefeect");
        // fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4498954&lng=74.6399163&page_type=DESKTOP_WEB_LISTING")
        const jsonData = await response.json();
        console.log(jsonData.data.cards[2].data.data.cards)
        setRestaurantData(jsonData.data.cards[2].data.data.cards)
    }
    return (

        <>
            <Search_bar data={restaurantData} setdata={setRestaurantData} />
            <div className='card_container'>
                {
                    restaurantData.map(restaurant => {
                        return <Card {...restaurant.data} key={restaurant.data.id} />
                    })
                }

            </div>
        </>

    )
}

export default Body