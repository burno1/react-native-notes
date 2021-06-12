import React , { createContext, useReducer } from "react";
import { useState } from "react";

const NotesContext = createContext();


const notes = [    
                {id:1,title:'n1', description: 'Its a note description'},
                {id:2,title:'n2', description: 'Its a note description'},
                {id:3,title:'n3', description: 'Its a note description'}
            ] ;  


const noteReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return ({...state, notes: state.notes.concat(action.payload)})
            break;
        case 'edit':
            let newNote = action.payload;
            return ({...state, notes: state.notes.map(
                note => (note.id == newNote.id ? {...{id:newNote.id, title:newNote.title, description: newNote.description }}: note)
            )})
            break;
        case 'remove':
            return ({...state, notes: state.notes.filter(note => note.id != action.payload.id)});
            break;
        case 'read':
            return ({...state})
            break;
        default:D
            return ({...state})
            break;
    }
}

const NotesProvider = ({children}) =>{
    const [state, dispatch] = useReducer(noteReducer, {notes: notes});

    const add = (note) => {
        dispatch({ type: "add", payload: {id:Math.random(), title: note.title, description: note.description}}); 
    };

    const remove = (note) => {
        dispatch({ type: "remove", payload: note })
    }

    const edit = (note) => {
        dispatch({ type: "edit", payload: note })
    }
    

    return (
        <NotesContext.Provider value={{state ,add,edit, remove, dispatch}}>
            {children}
        </NotesContext.Provider>
    );
};


export  { NotesContext , NotesProvider };