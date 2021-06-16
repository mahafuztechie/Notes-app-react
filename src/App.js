import { useState } from 'react';
import {nanoid} from "nanoid"
import './App.css';
import NotesList from './components/NotesList';
import Search from "./components/Search";
import Header from "./components/Header";


function App() {
  const [notes, setNotes] = useState([
  {
    id: nanoid(),
    text: "this is my first note",
    date: "02/04/2021",
  },
  {
    id: nanoid(),
    text: "this is my second note",
    date: "03/05/2021",
  },
  {
    id: nanoid(),
    text: "this is my third note",
    date: "04/05/2021",
  },
  {
    id: nanoid(),
    text: "this is my fourth note",
    date: "18/04/2021",
  },

]);

const [searchText, setSearchText] = useState("");

const [darkMode, setDarkMode] = useState(false);

const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString()
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
};

const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id);
  setNotes(newNotes);
}
  return (
    <div className={`${darkMode && "dark-mode"}`}>
       <div className="max-w-screen-xl mr-auto ml-auto pl-5 pr-5">
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
    </div>
    </div>
   
  );
}

export default App;
