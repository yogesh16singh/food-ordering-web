import React, { useState } from 'react'

const Search_bar = (props) => {
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        console.log(props.data);
        let filteredData = props.data.filter((cv, index) => {
            console.log(cv.data.name)
            if (cv.data.name.toUpperCase().indexOf(search.toUpperCase()) > -1)
                return cv;
        })
        props.setdata(filteredData);
    }

    return (
        <div className='flex my-2  justify-center'>
            <input className='border-2' type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} />
            <button onClick={() => handleSearch()}> Search</button>
        </div>
    )
}

export default Search_bar