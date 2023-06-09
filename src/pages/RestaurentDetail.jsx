import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
const RestaurentDetail = () => {
    let { id } = useParams();


    const [singleRestaurant, setSingleRestaurant] = useState({});
    const [singleRestaurantMenu, setSingleRestaurantMenu] = useState({});
    useEffect(() => {
        console.log("useefeect");
        fetchData();
    }, []);

    const fetchData = async () => {
        // console.log(id.slice(1));
        const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.4498954&lng=74.6399163&restaurantId=${id.slice(1)}&submitAction=ENTER`;
        const response = await fetch(url)
        const jsonData = await response.json();
        console.log(jsonData.data.cards[0].card.card.info);
        setSingleRestaurant(jsonData.data.cards[0].card.card.info)
        setSingleRestaurantMenu(jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
        // console.log(jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
        // console.log(jsonData.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.categories[0].itemCards[0].card.info.name)
    }
    const dispatch = useDispatch();
    const handleClick = (item) => {
        dispatch(addItem(item))
    }

    return (
        <>
            <h2>Restaurent ID : {singleRestaurant.id}</h2>
            <h2>Name: {singleRestaurant.name}</h2>
            <h2>CITY: {singleRestaurant.city}</h2>


            <h1>Menu</h1>
            <ul>

                {Object.values(singleRestaurantMenu).map((item) => {

                    return <li key={item.card.info.id} >{item.card.info.name} - <button className="bg-green-400" onClick={() => {
                        handleClick(item)
                    }}>Add</button></li>
                })}
            </ul>

        </>
    )
}
export default RestaurentDetail