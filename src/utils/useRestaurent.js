import { useState, useEffect } from "react"
const useRestaurent = (id) => {
    const [restaurentData, setRestaurentData] = useState()

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async (id) => {
        console.log(id.slice(1));
        const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.4498954&lng=74.6399163&restaurantId=${id.slice(1)}&submitAction=ENTER`;
        const response = await fetch(url)
        const jsonData = await response.json();
        console.log(jsonData.data.cards[0].card.card.info);
        setRestaurentData(jsonData.data.cards[0].card.card.info)
    }

    return restaurentData;
}
export default useRestaurent;