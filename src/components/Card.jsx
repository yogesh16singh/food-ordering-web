import React from 'react'

const Card = ({ name, area, cloudinaryImageId }) => {
    return (
        <div className='card'>

            <img className='card_img' alt='card' src={"https://res.cloudinary.com/swiggy/image/upload/" + cloudinaryImageId}></img>
            <h3>{name}</h3>
            {/* <p>{cuisines.join(" , ")}</p> */}
            <h4>{area}</h4>

        </div>
    )
}

export default Card