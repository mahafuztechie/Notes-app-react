import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

function NotesList({notes, handleAddNote, handleDeleteNote}) {
    return (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-5">
                <AddNote handleAddNote={handleAddNote}/>
                {notes.map(({text, id, date}) => <Note id={id} text={text} date={date} handleDeleteNote={handleDeleteNote} />)}
            </div>
        
     
    )
}

export default NotesList
