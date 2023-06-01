import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError;
    console.log(error);
    return (
        <>
            <h1>Oops..</h1>
            <p>Sorry, an unexpected error has occurred.</p>
        </>
    )
}

export default Error