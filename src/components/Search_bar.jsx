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
        <>
            <input type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} />
            <button onClick={() => handleSearch()}> Search</button>
        </>
    )
}

export default Search_bar