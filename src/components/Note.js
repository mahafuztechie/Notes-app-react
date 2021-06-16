import React from 'react'
import {MdDeleteForever} from "react-icons/md"

function Note({text, date, id, handleDeleteNote}) {
    return (
        <div className=" whitespace-pre-wrap bg-yellow-200 rounded-lg p-5 h-72 flex flex-col justify-between">
            <span>{text}</span>
            <div className="flex items-center justify-between">
                <small>{date}</small>
                <MdDeleteForever onClick={() => handleDeleteNote(id)} 
                className="w-5 h-5 cursor-pointer hover:text-red-700 transform duration-200 hover:scale-125"/>
            </div>
        </div>
    )
}

export default Note
