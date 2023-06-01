import React from 'react'
import { Outlet } from 'react-router-dom'
import Aprofile from '../components/Aprofile'
const About = () => {

    return (
        <>
            <div>About</div>

            <Outlet />
        </>
    )
}

export default About