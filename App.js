import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NoteScreen from './src/screens/NoteScreen';
import { NotesProvider } from './src/context/NotesContext';
import NoteEditScreen from './src/screens/NoteEditScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NotesProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Notes" component={NoteScreen} />
            <Stack.Screen name="NoteEdit" component={NoteEditScreen} />
          </Stack.Navigator>
        </NavigationContainer>
    </NotesProvider>
  );
}

export default App;