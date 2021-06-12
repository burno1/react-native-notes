import React from 'react';
import { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NotesContext } from '../context/NotesContext';

const Note = ({note, navigation}) => {

    const notesContext = useContext(NotesContext);


  return (
    <View style={styles.topic}>
        <Text style={styles.title}>
          {note.title}
        </Text>
        <Text style={styles.description}>
          {note.description}
        </Text>
      
      
      <View style={styles.actionButton}>
        <Button  title='Deletar' onPress={ () => notesContext.remove(note) }/>
      </View>
      <View style={styles.actionButton} >
        <Button title='Editar' onPress={ () => navigation.navigate('NoteEdit', {note: note}) }/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topic:{
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignContent:'center',
    margin:10,
    flex:1
  },
  description: {
    alignContent:'flex-start',
    flex:1
  },
  actionButton: {
      flex:1,
      margin:10
  }
});

export default Note;