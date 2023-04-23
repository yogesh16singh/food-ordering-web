import React, { useState } from 'react'

const Search_bar = () => {
    const [search, setSearch] = useState("");
    return (
        <>
            <input type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} />
            <button>Search</button>
        </>
    )
}

export default Search_bar