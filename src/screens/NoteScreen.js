import React, {useContext, useReducer} from 'react';
import { useState } from 'react';
import { Text, StyleSheet, FlatList, TextInput, ScrollView, View } from 'react-native';
import Note from '../components/Note';
import { NotesContext } from '../context/NotesContext';




const NoteScreen = ({navigation}) =>{

    const notesContext = useContext(NotesContext);
    const [noteTitle, setNoteTitle] = useState('');
    const [noteDescription, setNoteDescription] = useState('');


    const onSubmit = () => {
        notesContext.add({title: noteTitle, description: noteDescription});
        setNoteTitle('');
        setNoteDescription('');
    }

    return (
        <>
           <ScrollView>
               <View style = {styles.container}>
               <TextInput 
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Note title"
                    value={noteTitle}
                    style={styles.textInput} 
                    onChangeText={(t) => setNoteTitle(t)}
                    onSubmitEditing ={() => onSubmit()}
                />
                <TextInput 
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Note description"
                    value={noteDescription}
                    style={styles.textInput} 
                    onChangeText={(t) => setNoteDescription(t)}
                    onSubmitEditing ={() => onSubmit()}
                />
               </View>
                <FlatList
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.title}
                    data={notesContext.state.notes}
                    renderItem={({ item }) =>
                        <Note navigation ={navigation} note={item}/>
                    }
                />
           </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
     
    },
    textInput: {
      fontSize: 15,
      padding: 5,
      flex:1,
      borderRadius: 10,
      backgroundColor: 'lightgray',
      alignContent: 'center',
    },
    item:{
        flexDirection: 'row',
        alignItems:'center'
      }
  });
  



export default NoteScreen;