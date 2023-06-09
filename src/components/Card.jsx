import React from 'react'

const Card = ({ name, area, cloudinaryImageId }) => {
    return (
        <div className=' h-56 w-52 border-2 border-gray-900 p-2'>

            <img className='h-36 w-52' alt='card' src={"https://res.cloudinary.com/swiggy/image/upload/" + cloudinaryImageId}></img>
            <h3>{name}</h3>
            {/* <p>{cuisines.join(" , ")}</p> */}
            <h4>{area}</h4>

        </div>
    )
}

export default Card