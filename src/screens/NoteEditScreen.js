import React, { useContext } from "react";
import { useEffect } from "react";
import { Text, StyleSheet,TextInput, Button } from "react-native";
import { useState } from "react/cjs/react.development";
import { NotesContext } from "../context/NotesContext";

const NoteEditScreen = ( { navigation, route }) => {
  const notesContext = useContext(NotesContext);
  const [oldNote, setOldNote] = useState({});

  useEffect(() => {
      setOldNote(route.params.note);
  },[]);
  
  const onSubmit = () =>{
    notesContext.edit(oldNote);
    navigation.navigate("Notes");
  }

  return (
    <>
      <TextInput 
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Note title"
                    value={oldNote.title}
                    style={styles.textInput} 
                    onChangeText={(t) => setOldNote({id:route.params.note.id, title:t, description: oldNote.description})}
                    onSubmitEditing ={() => onSubmit()}
        />
      <TextInput 
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Note Description"
                    value={oldNote.description}
                    style={styles.textInput} 
                    onChangeText={(t) => setOldNote({id:route.params.note.id, description:t, title:oldNote.title})}
                    onSubmitEditing ={() => onSubmit()}
        />
    </>
  );
};

const styles = StyleSheet.create({
    textInput: {
      fontSize: 18,
      marginLeft: 10
    },
  });

export default NoteEditScreen;
