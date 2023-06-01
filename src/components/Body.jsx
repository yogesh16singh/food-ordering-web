import React, { useEffect, useState } from 'react'
import Card from './Card'
import Search_bar from './Search_bar'
import carddata from '../helper'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import useOnline from '../utils/useOnline'
const Body = () => {
    const [allRestaurantData, setAllRestaurantData] = useState(carddata);
    const [filteredRestaurantData, setFilteredRestaurantData] = useState(carddata);
    useEffect(() => {
        console.log("useefeect");
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4498954&lng=74.6399163&page_type=DESKTOP_WEB_LISTING")
        const jsonData = await response.json();
        console.log(jsonData.data.cards[2].data.data.cards);
        // console.log(jsonData.data.cards[0].data.data.cards);
        setAllRestaurantData(jsonData?.data?.cards[2]?.data?.data.cards)
        setFilteredRestaurantData(jsonData?.data?.cards[2]?.data?.data?.cards)
    }
    if (allRestaurantData.length === 0)
        return (<Shimmer></Shimmer>);

    const isOnline = useOnline();
    if (!isOnline) {
        return (<h1>🔴 Not Connected to network</h1>);
    }

    return (

        <>
            <Search_bar data={allRestaurantData} setdata={setFilteredRestaurantData} />
            {(filteredRestaurantData.length == 0) && <h1>Matched data not found</h1>}
            <div className='card_container'>
                {
                    filteredRestaurantData.map(restaurant => {
                        return (
                            <Link to={"restaurentDetail/:" + restaurant.data.id} key={restaurant.data.id}>
                                <Card {...restaurant.data} />
                            </Link>
                        )
                    })
                }

            </div>
        </>

    )
}

export default Body