import React, { useState } from 'react'

function AddNote({handleAddNote}) {
    const [noteText, setNoteText] = useState("");
    const  characterLimit = 200;
    const handleChange = (e) => {
        if(characterLimit - e.target.value.length >= 0){
            setNoteText(e.target.value);
        }
        
    }
    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
        }  
    }
    return (
        <div className=" whitespace-pre-wrap bg-indigo-500 rounded-lg p-5 h-72 flex flex-col justify-between">
            <textarea  rows="8" cols="10" placeholder="type to add a note..."
            className="border-none w-full resize-none bg-indigo-500 focus:outline-none"
            value={noteText}
            onChange={handleChange}
            ></textarea>
            <div className="flex items-center justify-between">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button onClick={handleSaveClick} className="bg-gray-400 border-none rounded-full text-center w-10 cursor-pointer hover:bg-yellow-200 focus:outline-none ">Save</button>
            </div>
        </div>
    )
}

export default AddNote
