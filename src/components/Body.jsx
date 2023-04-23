import React, { useEffect, useState } from 'react'
import Card from './Card'
import Search_bar from './Search_bar'
import carddata from '../helper'
import Shimmer from './Shimmer'
const Body = () => {
    const [allRestaurantData, setAllRestaurantData] = useState([]);
    const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);
    useEffect(() => {
        console.log("useefeect");
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4498954&lng=74.6399163&page_type=DESKTOP_WEB_LISTING")
        const jsonData = await response.json();
        console.log(jsonData.data.cards[2].data.data.cards)
        setAllRestaurantData(jsonData.data.cards[2].data.data.cards)
        setFilteredRestaurantData(jsonData.data.cards[2].data.data.cards)
    }
    if (allRestaurantData.length === 0)
        return (<Shimmer></Shimmer>);



    return (

        <>
            <Search_bar data={allRestaurantData} setdata={setFilteredRestaurantData} />
            {(filteredRestaurantData.length == 0) && <h1>Matched data not found</h1>}
            <div className='card_container'>
                {
                    filteredRestaurantData.map(restaurant => {
                        return <Card {...restaurant.data} key={restaurant.data.id} />
                    })
                }

            </div>
        </>

    )
}

export default Body