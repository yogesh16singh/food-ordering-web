import React from "react";
import { useNavigate, useParams } from "react-router-dom";
const RestaurentDetail = () => {
    let { id } = useParams();
    const nav = useNavigate();
    console.log(nav);

    return (
        <>
            <h1>Restaurent ID : {id}</h1>
            <button onClick={() => { nav("/about") }}>na</button>
        </>
    )
}
export default RestaurentDetail