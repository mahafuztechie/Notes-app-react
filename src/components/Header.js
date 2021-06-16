import React from 'react'

function Header({handleToggleDarkMode}) {
    return (
        <div className="flex justify-between items-center px-5">
            <h1 className="text-3xl font-semibold">Notes</h1>
            <button onClick={() => handleToggleDarkMode((prevDarkMode)=> !prevDarkMode)}
            className="p-2 mt-3 text-white text-center font-semibold bg-gray-400 focus:outline-none rounded-full">Toggle Mode</button>
        </div>
    )
}


export default Header
