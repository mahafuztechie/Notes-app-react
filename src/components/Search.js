import React from 'react'
import {MdSearch} from "react-icons/md"

function Search({handleSearchNote}) {
    return (
        <div className="flex items-center pl-2 bg-gray-200 rounded-lg m-5">
            <MdSearch className="w-5 h-5"/>
            <input type="text" placeholder="type to search..."
            onChange={(e)=> handleSearchNote(e.target.value)}
            className="bg-transparent pl-2 focus:outline-none"
            />
        </div>
    )
}

export default Search
